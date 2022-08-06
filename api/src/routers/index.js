const express = require('express');
const router = express.Router();
const { registrationStudent } = require('../controllers/student/index');

router.post('/new',
  registrationStudent.validFields,
  registrationStudent.newStudent
);

module.exports = router;