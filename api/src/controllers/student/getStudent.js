const studentService = require('../../services/studentService');

const listAllStudents = async (_req, res) => {
  const students = await studentService.findAll();
  const listStudents = students.map(i => ({
    id: i.id,
    name: i.name,
    email: i.email,
    ru: i.ru,
    cpf: i.cpf
  }));
  

  try {
    return res.status(200).json(listStudents);
  } catch (error) {
    return res.status(400).send(error);
  }
}

module.exports = {
  listAllStudents,
}