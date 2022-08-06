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

const findStudent = async (req, res) => {
  const { id } = req.params;
  const search = await studentService.findOne({where: {id: id}}) 

  if (!search) {
    return res.status(401).send('Id não encontrado');
  }
  
  try {
    const { id, name, email, ru, cpf } = search.dataValues;
    const searchResult = { id, name, email, ru, cpf };

    res.status(200).json(searchResult);
  } catch (error) {
    res.status(400).json(error);
  }
}

module.exports = {
  listAllStudents,
  findStudent,
}