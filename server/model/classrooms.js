const db = require('../db/connect');

async function getAllClassrooms(userId) {
  const { rows } = await db.query('Select * from classrooms where user_id = $1', [userId]);
  return rows;
}

async function createClassroom(classroomId, name, userId) {
  const { rows } = await db.query('Insert into classrooms(classroom_id,name,user_id) values($1,$2,$3) returning *', [
    classroomId,
    name,
    userId,
  ]);
  return rows;
}

async function getClassroomFolders(userId) {
  const { rows } = await db.query('Select * from folders_classrooms where user_id = $1', [userId]);

  return rows;
}

async function createClassroomFolder(folderId, classroomId, userId) {
  const { rows } = await db.query('Insert into folders_classrooms(f_id,classroom_id,user_id) values ($1,$2,$3) returning *;', [
    folderId,
    classroomId,
    userId,
  ]);

  return rows;
}

module.exports = { getAllClassrooms, createClassroom, getClassroomFolders, createClassroomFolder };
