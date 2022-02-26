const asyncHandler = require('express-async-handler');
const { client, google } = require('./apisetup');
const model = require('../model/users');
const modelDrive = require('../model/drive');
const modelClassroom = require('../model/classrooms');

const classroom = google.classroom({ version: 'v1', auth: client });

const synchClassrooms = asyncHandler(async (req, res) => {
  const userHash = req.params.id;
  const userId = await model.getUser(req.sessionID);
  console.log(userId);

  const apiRes = await classroom.courses.list({});
  const mappedRes = apiRes.data.courses.map((el) => ({ id: el.id, name: el.name, user_id: userId }));
  const dbClassrooms = await modelClassroom.getAllClassrooms(userId.acc_id);
  console.log(dbClassrooms);

  res.status(200).json(apiRes.data.courses);
  console.log('END');
});

module.exports = { synchClassrooms };
