const asyncHandler = require('express-async-handler');
const { client, google } = require('./apisetup');
const driveModel = require('../model/drive');
const { createNoteServerside } = require('./drive');

const docs = google.docs({ version: 'v1', auth: client });

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

module.exports = { testDocsAPI, addNoteText };
