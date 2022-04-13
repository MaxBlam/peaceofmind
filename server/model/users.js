const db = require('../db/connect');

async function getUser(hash) {
  const res = await db.query('SELECT * from users where hash = $1', [hash]);

  return res.rows;
}

async function createUser(userHash, rootId) {
  const res = await db.query(
    'INSERT INTO users (hash,root_folder) VALUES ($1,$2) RETURNING *',
    [userHash, rootId],
  );

  return res.rows;
}

async function getUserSession(sid) {
  const res = await db.query('Select * from user_sessions where sid = $1', [
    sid,
  ]);
  return res.rows;
}

async function deleteUserSession(sid) {
  const res = await db.query(
    'DELETE FROM user_sessions WHERE sid = $1 returning *',
    [sid],
  );
  return res.rows;
}

async function getUserSessions() {
  const res = await db.query('SELECT * from user_sessions');
  return res.rows;
}

async function getUserSettings(userId) {
  const { rows } = await db.query(
    'SELECT * from user_settings where acc_id = $1',
    [userId],
  );

  return rows;
}

function getColorString(settings) {
  const { pColor, hColor, liColor } = settings;
  const pColorString = `${pColor.r / 255},${pColor.g / 255},${pColor.b / 255}`;
  const hColorString = `${hColor.r / 255},${hColor.g / 255},${hColor.b / 255}`;
  const liColorString = `${liColor.r / 255},${liColor.g / 255},${
    liColor.b / 255
  }`;

  return {
    pColorString,
    hColorString,
    liColorString,
  };
}

async function createUserSettings(userId, settings) {
  const colorStrings = getColorString(settings);

  const { rows } = await db.query(
    'insert into user_settings (acc_id,paragraph_color,list_color,heading_color) values($1,$2,$3,$4) returning *;',
    [
      userId,
      colorStrings.pColorString,
      colorStrings.liColorString,
      colorStrings.hColorString,
    ],
  );
  return rows;
}

async function updateUserSettings(userId, settings) {
  const colorStrings = getColorString(settings);
  const { rows } = await db.query(
    'UPDATE user_settings set paragraph_color = $1, list_color = $2, heading_color = $3 where acc_id = $4 returning *;',
    [
      colorStrings.pColorString,
      colorStrings.liColorString,
      colorStrings.hColorString,
      userId,
    ],
  );
  return rows;
}

module.exports = {
  getUser,
  createUser,
  deleteUserSession,
  getUserSessions,
  getUserSession,
  getUserSettings,
  createUserSettings,
  updateUserSettings,
};
