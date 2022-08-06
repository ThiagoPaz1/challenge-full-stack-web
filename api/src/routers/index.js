const express = require('express');
const router = express.Router();
const { 
  registrationStudent,
  getStudent,
  editStudent,
  deleteStudent
} = require('../controllers/student/index');

router.get('/:id', getStudent.findStudent);
router.get('/', getStudent.listAllStudents);

router.post('/new',
  registrationStudent.validFields,
  registrationStudent.newStudent
);

router.put('/edit/:id', editStudent.edit);

router.delete('/delete/:id', deleteStudent.remove);

module.exports = router;