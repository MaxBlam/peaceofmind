const db = require('../db/connect');

async function getUser(hash) {
  const res = await db.query('SELECT * from users where hash = $1', [hash]);

  return res.rows;
}

async function createUser(userHash, rootId) {
  const res = await db.query('INSERT INTO users (hash,root_folder) VALUES ($1,$2) RETURNING *', [userHash, rootId]);

  return res.rows;
}

async function getUserSession(sid) {
  const res = await db.query('Select * from user_sessions where sid = $1', [sid]);
  return res.rows;
}

async function deleteUserSession(sid) {
  const res = await db.query('DELETE FROM user_sessions WHERE sid = $1 returning *', [sid]);
  return res.rows;
}

async function getUserSessions() {
  const res = await db.query('SELECT * from user_sessions');
  return res.rows;
}

module.exports = { getUser, createUser, deleteUserSession, getUserSessions, getUserSession };
