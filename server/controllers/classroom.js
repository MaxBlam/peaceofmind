const asyncHandler = require('express-async-handler');
const { client, google } = require('./apisetup');
const model = require('../model/users');
const modelDrive = require('../model/drive');
const modelClassroom = require('../model/classrooms');

const classroom = google.classroom({ version: 'v1', auth: client });

const synchClassrooms = asyncHandler(async (req, res) => {
  console.log('START');

  const userHash = req.params.id;
  const userId = (await model.getUser(userHash))[0];

  const apiRes = await classroom.courses.list({
    courseStates: ['ACTIVE'],
  });
  const mappedRes = apiRes.data.courses.map((el) => ({ id: el.id, name: el.name, user_id: userId.acc_id }));
  const dbClassrooms = await modelClassroom.getAllClassrooms(userId.acc_id);
  const mappedDbClassrooms = dbClassrooms.map((el) => el.classroom_id);
  mappedRes.forEach((classr) => {
    if (!mappedDbClassrooms.includes(classr.id)) {
      modelClassroom.createClassroom(classr.id, classr.name, classr.user_id);
    }
  });

  res.status(200).json(mappedRes);
  console.log('END');
});

module.exports = { synchClassrooms };
