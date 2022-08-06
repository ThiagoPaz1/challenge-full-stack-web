const studentService = require('../services/studentService');

const newStudent = async (req, res) => {
  
  try {
    await studentService.create({name, email, cpf});

    return res.status(201).send('Criado com sucesso!');
  } catch (error) {
    return res.status(400).send(error)
  }
}

module.exports = {
  newStudent,
}