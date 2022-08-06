const express = require('express');
const router = express.Router();
const { registrationStudent, getStudent } = require('../controllers/student/index');

router.get('/:id', getStudent.findStudent);
router.get('/', getStudent.listAllStudents);

router.post('/new',
  registrationStudent.validFields,
  registrationStudent.newStudent
);

module.exports = router;