const db = require('../db/connect');

async function createNote(userId, docId, folderId, copyOf) {
  const { rows } = await db.query(
    'insert into documents(doc_id, fk_acc_id, fk_folder_id, copy_of) VALUES ($1,$2,$3,$4)',
    [docId, userId, folderId, copyOf],
  );
  console.log(userId);

  await db.query(
    `INSERT INTO action_logger(action,"user",time) values ('INSERT Document',$1,now())`,
    [userId],
  );
  return rows;
}

async function createFolder(userId, name, folderId, teacherName, grade) {
  const { rows } = await db.query(
    'Insert into folders(name,teacher_name,grade,fk_acc_id,folder_id) values ($1,$2,$3,$4,$5) returning *;',
    [name, teacherName, grade, userId, folderId],
  );
  await db.query(
    `INSERT INTO action_logger(action,"user",time) values ('INSERT Folder',$1,now())`,
    [userId],
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

async function getFolderFid(folderId) {
  const { rows } = await db.query('Select * from folders where f_id =$1', [folderId]);

  return rows;
}

async function getAllUserFolders(userId) {
  const { rows } = await db.query('Select * from folders where fk_acc_id =$1', [userId]);

  return rows;
}

async function deleteNote(docId, userId) {
  const { rows } = await db.query('Delete from documents where doc_id =$1 returning *;', [docId]);
  await db.query(
    `INSERT INTO action_logger(action,"user",time) values ('DELETE Document',$1,now())`,
    [userId],
  );
  return rows;
}

async function deleteFolder(folderId, userId) {
  const { rows } = await db.query('Delete from folders where f_id =$1 returning *;', [folderId]);
  await db.query(
    `INSERT INTO action_logger(action,"user",time) values ('DELETE Folder',$1,now())`,
    [userId],
  );

  return rows;
}

async function getCopysOfDocument(docId) {
  const { rows } = await db.query('SELECT * from documents where copy_of =$1', [docId]);

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
  getCopysOfDocument,
  getFolderFid,
};
