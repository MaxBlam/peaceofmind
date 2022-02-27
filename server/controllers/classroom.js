const asyncHandler = require('express-async-handler');
const { client, google } = require('./apisetup');
const model = require('../model/users');
const modelDrive = require('../model/drive');
const modelClassroom = require('../model/classrooms');
const { createFolderServerside } = require('./drive');

const classroom = google.classroom({ version: 'v1', auth: client });

async function getOverallStudentGrade(classroomId) {
  const apiCourseWorkIds = await classroom.courses.courseWork.list({
    courseId: classroomId,
  });
  const filteredRes = apiCourseWorkIds.data.courseWork ? apiCourseWorkIds.data.courseWork.map((el) => el.id) : [];
  const maxPoints = [];
  const userGrades = [];
  await filteredRes.forEach(async (courseWork) => {
    const studentSubmissions = await classroom.courses.courseWork.studentSubmissions.list({
      courseId: classroomId,
      courseWorkId: courseWork,
    });
    const filteredSubmissions = studentSubmissions.data.studentSubmissions.filter((el) => el.assignedGrade);
    if (filteredSubmissions.map((el) => el.assignedGrade).length > 0) {
      const temp = filteredSubmissions.map((ell) => ell.courseWorkId);
      const maxPoint = apiCourseWorkIds.data.courseWork.filter((el) => temp.includes(el.id)).map((el) => el.maxPoints);
      userGrades.push(filteredSubmissions.map((el) => el.assignedGrade)[0]);
      maxPoints.push(maxPoint);
    }
  });
  return {
    grades: userGrades,
    maxPoints: maxPoints,
  };
}

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

  const secondDbClassrooms = await modelClassroom.getAllClassrooms(userId.acc_id);
  const dbFolderClassrooms = await modelClassroom.getClassroomFolders(userId.acc_id);
  const mappedFolderClassrooms = dbFolderClassrooms.map((el) => el.classroom_id);
  const filteredSecondDbClassrooms = secondDbClassrooms.filter((el) => !mappedFolderClassrooms.includes(el.classroom_id));

  filteredSecondDbClassrooms.forEach(async (classr) => {
    const teachers = await classroom.courses.teachers.list({
      courseId: classr.classroom_id,
    });
    const { grades, maxPoints } = await getOverallStudentGrade(classr.classroom_id);
    const teacherName = teachers.data.teachers[0].profile.name.fullName;
    setTimeout(async () => {
      let sumGrades = 0;
      let sumMaxPoints = 0;
      grades.forEach((el) => {
        sumGrades += Number(el);
      });
      maxPoints.forEach((el) => {
        sumMaxPoints += Number(el);
      });

      const overallGrade = Math.round((sumGrades / sumMaxPoints) * 100) || 0;

      const apiNewFolder = await createFolderServerside(classr.name, userId.root_folder);
      const newFolder = await modelDrive.createFolder(userId.acc_id, classr.name, apiNewFolder.data.id, teacherName, overallGrade);
      const classFolder = await modelClassroom.createClassroomFolder(newFolder[0].f_id, classr.classroom_id, userId.acc_id);
      console.log(classFolder);
    }, 3400);
  });

  res.status(200).json(mappedRes);
  console.log('END');
});

module.exports = { synchClassrooms };
