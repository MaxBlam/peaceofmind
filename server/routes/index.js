const express = require('express');
const { login, logout } = require('../controllers/users');
const { synchClassrooms, syncClassroomFiles } = require('../controllers/classroom');
const {
  testDrive,
  createNote,
  getFolders,
  deleteNote,
  createFolder,
  getNotesFromFolder,
  deleteFolder,
} = require('../controllers/drive');

const router = express.Router();

router.get('/welcome', (req, res) => res.send('Willkommen bei Piece of Mind!'));
router.post('/login', login);
router.get('/testdrive', testDrive);
router.get('/logout', logout);
router.post('/note', createNote);
router.get('/folder/:user', getFolders);
router.delete('/note', deleteNote);
router.post('/folder', createFolder);
router.delete('/folder', deleteFolder);
router.get('/notes/:folderid', getNotesFromFolder);
router.get('/classrooms/:id', synchClassrooms);
router.get('/classroomfiles/:id', syncClassroomFiles);

module.exports = router;
