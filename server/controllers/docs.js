const asyncHandler = require('express-async-handler');
const { client, google } = require('./apisetup');

const docs = google.docs({ version: 'v1', auth: client });

const testDocsAPI = asyncHandler(async (req, res) => {
  const docId = req.params.id;

  const apiRes = await docs.documents.get({
    documentId: docId,
  });

  res.status(200).json(apiRes);
});

const addNoteText = asyncHandler(async (req, res) => {
  console.log(req.body);

  res.status(200).json(req.body);
});

module.exports = { testDocsAPI, addNoteText };
