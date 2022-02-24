const asyncHandler = require('express-async-handler');
const { client, google } = require('./apisetup');
const model = require('../model/users');
const modelDrive = require('../model/drive');

const drive = google.drive({ version: 'v3', auth: client });

const testDrive = asyncHandler(async (req, res) => {
  const driveRes = await drive.files.list({
    pageSize: 20,
    fields: 'nextPageToken, files(id, name,mimeType)',
  });
  res.status(200).json({
    driveRes,
  });
});

const createRootFolder = asyncHandler(async () => {
  const fileMetadata = {
    name: 'Piece of Mind',
    mimeType: 'application/vnd.google-apps.folder',
  };
  const driveRes = await drive.files.create({
    resource: fileMetadata,
    fields: 'id',
  });

  return driveRes.data.id;
});

const createNote = asyncHandler(async (req, res) => {
  const userHash = req.body.userHash;
  const noteName = req.body.noteName;
  const folderId = req.body.folderId;
  const userDBdata = await model.getUser(userHash);
  console.log('test1');
  const fileMetadata = {
    name: noteName,
    parents: [folderId],
    mimeType: 'application/vnd.google-apps.document',
  };
  if (userDBdata.length === 0) {
    res.status(400).send('User Not Found');
    return;
  }
  const driveRes = await drive.files.create({
    resource: fileMetadata,
    fields: 'id',
  });
  const folderDbData = await modelDrive.getFolder(folderId);
  const dbRes = await modelDrive.createNote(
    userDBdata[0].acc_id,
    driveRes.data.id,
    folderDbData[0].f_id,
  );
  res.status(200).json(dbRes);
});

const getFolders = asyncHandler(async (req, res) => {
  const userHash = req.params.user;
  const userDBdata = await model.getUser(userHash);
  const rootId = userDBdata[0].root_folder;
  const driveRes = await drive.files.list({
    pageSize: 20,
    fields: 'nextPageToken, files(id, name,mimeType)',
    q: `'${rootId}' in parents`,
  });
  const dbFolderData = (await modelDrive.getAllUserFolders(userDBdata[0].acc_id)).map((el) => el.folder_id);
  res.status(200).json(driveRes.data.files.filter((el) => dbFolderData.includes(el.id)));
});

const getNotesFromFolder = asyncHandler(async (req, res) => {
  const folderId = req.params.folderid;
  const driveRes = await drive.files.list({
    pageSize: 20,
    fields: 'nextPageToken, files(id, name,mimeType)',
    q: `'${folderId}' in parents`,
  });
  res.status(200).json(driveRes);
});

const deleteNote = asyncHandler(async (req, res) => {
  const userHash = req.body.userHash;
  const noteId = req.body.noteId;
  const userDBdata = await model.getUser(userHash);

  const noteDbData = await modelDrive.getNote(noteId);

  if (noteDbData.length === 0) {
    res.status(400).send('File doesnt exist');
    return;
  }
  if (noteDbData.fk_acc_id !== userDBdata.acc_id) {
    res.status(500).send('This file doesnt belong to you!');
    return;
  }
  await drive.files.delete({
    fileId: noteId,
  });

  const dbRes = await modelDrive.deleteNote(noteId);

  res.status(200).json(dbRes);
});

const deleteFolder = asyncHandler(async (req, res) => {
  const userHash = req.body.userHash;
  const folderId = req.body.folderId;
  const userDBdata = await model.getUser(userHash);

  const folderDbData = await modelDrive.getFolder(folderId);

  if (folderDbData.length === 0) {
    res.status(400).send('Folder doesnt exist');
    return;
  }
  if (folderDbData.fk_acc_id !== userDBdata.acc_id) {
    res.status(500).send('This folder doesnt belong to you!');
    return;
  }
  await drive.files.delete({
    fileId: folderId,
  });

  const dbRes = await modelDrive.deleteFolder(folderDbData[0].f_id);

  res.status(200).json(dbRes);
});

const createFolder = asyncHandler(async (req, res) => {
  const userHash = req.body.userHash;
  const folderName = req.body.folderName;
  const teacherName = req.body.teacherName;
  const grade = req.body.grade;
  const userDBdata = await model.getUser(userHash);
  const rootId = userDBdata[0].root_folder;
  const fileMetadata = {
    name: folderName,
    parents: [rootId],
    mimeType: 'application/vnd.google-apps.folder',
  };
  if (userDBdata.length === 0) {
    res.status(400).send('User Not Found');
    return;
  }
  const driveRes = await drive.files.create({
    resource: fileMetadata,
    fields: 'id',
  });

  const dataBaseRes = await modelDrive.createFolder(userDBdata[0].acc_id, folderName, driveRes.data.id, teacherName, grade);
  res.status(200).json(dataBaseRes);
});

module.exports = {
  testDrive,
  createNote,
  getFolders,
  deleteNote,
  deleteFolder,
  createFolder,
  getNotesFromFolder,
  createRootFolder,
};
