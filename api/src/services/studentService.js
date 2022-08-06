const Student = require('../models/student');

const create = async (body) => {
  const { name, email, cpf  } = body;

  return await Student.create({name, email, ru: '15345', cpf});
}

module.exports = {
  create,
}