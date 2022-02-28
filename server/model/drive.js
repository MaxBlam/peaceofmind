const db = require('../db/connect');

async function createNote(userId, docId, folderId) {
  const { rows } = await db.query(
    'Insert into documents(doc_id,fk_acc_id,fk_folder_id) values ($1,$2,$3) returning *;',
    [docId, userId, folderId],
  );

  return rows;
}

async function createFolder(userId, name, folderId, teacherName, grade) {
  const { rows } = await db.query(
    'Insert into folders(name,teacher_name,grade,fk_acc_id,folder_id) values ($1,$2,$3,$4,$5) returning *;',
    [name, teacherName, grade, userId, folderId],
  );

  return rows;
}

async function getNote(docId) {
  const { rows } = await db.query('Select * from documents where doc_id =$1', [docId]);

  return rows;
}

async function getFolder(folderId) {
  const { rows } = await db.query('Select * from folders where folder_Id =$1', [folderId]);

  return rows;
}

async function getAllUserFolders(userId) {
  const { rows } = await db.query('Select * from folders where fk_acc_id =$1', [userId]);

  return rows;
}

async function deleteNote(docId) {
  const { rows } = await db.query('Delete from documents where doc_id =$1 returning *;', [docId]);

  return rows;
}

async function deleteFolder(folderId) {
  const { rows } = await db.query('Delete from folders where f_id =$1 returning *;', [folderId]);

  return rows;
}

module.exports = {
  createNote,
  getNote,
  deleteNote,
  createFolder,
  getFolder,
  deleteFolder,
  getAllUserFolders,
};
