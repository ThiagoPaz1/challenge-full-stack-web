const Student = require('../models/student');

const create = async (body) => {
  const { name, email, cpf  } = body;

  return await Student.create({name, email, ru: '15345', cpf});
}

const findOne = async (search) => {
 return await Student.findOne(search)
}

module.exports = {
  create,
  findOne,
}