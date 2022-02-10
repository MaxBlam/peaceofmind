const asyncHandler = require('express-async-handler');
const { client, google } = require('./apisetup');
const model = require('../model/users');
const modelDrive = require('../model/drive');
const modelClassroom = require('../model/classrooms');

const classroom = google.classroom({ version: 'v1', auth: client });

const getAllClassrooms = asyncHandler(async (req, res) => {
  const apiRes = await classroom.courses.list({
    pageSize: 10,
  });
  const userId = await model.getUser(req.session.userHash);
  const dbClassrooms = await modelClassroom.getAllClassrooms(userId.acc_id);
  res.status(200).json(apiRes.data.courses);
});

module.exports = { getAllClassrooms };
