const db = require('../db/connect');

async function getAllClassrooms(userId) {
  const { rows } = await db.query('Select * from classrooms where user_id = $1', [userId]);
  return rows;
}

module.exports = { getAllClassrooms };
