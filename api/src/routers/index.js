const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.post('/new', studentController.newStudent);

module.exports = router;