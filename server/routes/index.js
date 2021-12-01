const express = require('express');
const { login, logout, register } = require('../controllers/users');
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

router.get('/welcome', (req, res) => res.send('Willkommen beim Piece of Mind!'));
router.post('/login', login);
router.post('/register', register);
router.get('/testdrive', testDrive);
router.get('/logout', logout);
router.post('/note', createNote);
router.get('/folder/:user', getFolders);
router.delete('/note', deleteNote);
router.post('/folder', createFolder);
router.delete('/folder', deleteFolder);
router.get('/notes/:folderid', getNotesFromFolder);

module.exports = router;
