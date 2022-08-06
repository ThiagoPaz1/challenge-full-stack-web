const Student = require('../models/student');

const create = async (body) => {
  const { name, email, cpf  } = body;

  return await Student.create({name, email, ru: '15345', cpf});
}

const findOne = async (search) => {
 return await Student.findOne(search)
}

const findAll = async () => {
  return await Student.findAll();
}

const update = async (id, body) => {
  return await Student.update({ body }, {where: {id: id}});
}

module.exports = {
  create,
  findOne,
  findAll,
}