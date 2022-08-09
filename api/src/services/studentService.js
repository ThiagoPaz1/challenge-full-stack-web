const Student = require('../models/student');

const create = async (body) => {
  const { name, email, ru, cpf  } = body;

  return await Student.create({name, email, ru, cpf});
}

const findOne = async (search) => {
 return await Student.findOne(search)
}

const findAll = async () => {
  return await Student.findAll();
}

const update = async (id, body) => {
  return await Student.update(body, {where: { id: id }});
}

const remove = async (id) => {
  return await Student.destroy({
    where: { id: id }
  });
}

module.exports = {
  create,
  findOne,
  findAll,
  update,
  remove,
}