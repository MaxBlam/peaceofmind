const asyncHandler = require('express-async-handler');
const { client, google } = require('./apisetup');
const driveModel = require('../model/drive');
const userModel = require('../model/users');
const { createNoteServerside } = require('./drive');

const docs = google.docs({ version: 'v1', auth: client });

async function colorDoc(arr, docId, revisionId, colors) {
  let timeoutTimer = 0;
  arr.forEach((heading) => {
    const fileMetadata = {
      requests: [
        {
          updateTextStyle: {
            textStyle: {
              foregroundColor: {
                color: {
                  rgbColor: {
                    red: Number(colors.red),
                    green: Number(colors.green),
                    blue: Number(colors.blue),
                  },
                },
              },
            },
            fields: '*',
            range: {
              segmentId: '',
              startIndex: heading.startIndex,
              endIndex: heading.endIndex,
            },
          },
        },
      ],
      writeControl: {
        targetRevisionId: revisionId,
      },
    };

    setTimeout(async () => {
      await docs.documents.batchUpdate({
        documentId: docId,
        resource: fileMetadata,
      });
    }, timeoutTimer);
    timeoutTimer += 20;
  });
}

const testDocsAPI = asyncHandler(async (req, res) => {
  const docId = req.params.id;

  const apiRes = await docs.documents.get({
    documentId: docId,
  });

  res.status(200).json(apiRes);
});

const addNoteText = asyncHandler(async (req, res) => {
  const { userHash, text, folder, docName } = req.body;
  const folderData = await driveModel.getFolderFid(folder);
  const folderId = folderData[0].folder_id;
  const driveRes = await createNoteServerside({
    userHash: userHash,
    noteName: docName,
    folderId: folderId,
  });
  console.log('TEST 1', userHash);

  if (driveRes === 'No User') {
    res.status(400).send('User not found');
    return;
  }
  console.log(driveRes);

  const newDocId = driveRes[0].doc_id;

  const getNewDoc = await docs.documents.get({
    documentId: newDocId,
  });
  console.log('TEST 2');

  const revisionId = getNewDoc.data.revisionId;
  const fileMetadata = {
    requests: [
      {
        insertText: {
          text: text,
          endOfSegmentLocation: {
            segmentId: '',
          },
        },
      },
    ],
    writeControl: {
      targetRevisionId: revisionId,
    },
  };
  const docRes = await docs.documents.batchUpdate({
    documentId: newDocId,
    resource: fileMetadata,
  });
  res.status(200).json(docRes);
});

const colorCodeDoc = asyncHandler(async (req, res) => {
  const { userHash, docId } = req.body;
  const userDbData = await userModel.getUser(userHash);
  const userSettings = await userModel.getUserSettings(userDbData[0].acc_id);
  const { data } = await docs.documents.get({
    documentId: docId,
  });

  const revisionId = data.revisionId;

  // Extract from Document Tree - 1 - Headings

  const headingParagraphs = data.body.content.filter((par) =>
    par.paragraph ? par.paragraph.paragraphStyle.namedStyleType === 'SUBTITLE' : null,
  );
  const headingColors = {
    red: userSettings[0].heading_color.split(',')[0],
    green: userSettings[0].heading_color.split(',')[1],
    blue: userSettings[0].heading_color.split(',')[2],
  };

  await colorDoc(headingParagraphs, docId, revisionId, headingColors);

  // Extract from Document Tree - 2 - Paragraphs
  const NormalTextParagraph = data.body.content.filter((par) =>
    par.paragraph
      ? par.paragraph.paragraphStyle.namedStyleType === 'NORMAL_TEXT' && !par.paragraph.bullet
      : null,
  );
  const normalTextColors = {
    red: userSettings[0].paragraph_color.split(',')[0],
    green: userSettings[0].paragraph_color.split(',')[1],
    blue: userSettings[0].paragraph_color.split(',')[2],
  };

  await colorDoc(NormalTextParagraph, docId, revisionId, normalTextColors);

  // Extract from Document Tree - 2 - Lists
  const ListParagraph = data.body.content.filter((par) =>
    par.paragraph ? par.paragraph.bullet : null,
  );
  const listColors = {
    red: userSettings[0].list_color.split(',')[0],
    green: userSettings[0].list_color.split(',')[1],
    blue: userSettings[0].list_color.split(',')[2],
  };

  await colorDoc(ListParagraph, docId, revisionId, listColors);

  res.status(200).send('Done');
});

module.exports = { testDocsAPI, addNoteText, colorCodeDoc };
