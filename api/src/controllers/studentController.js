const studentService = require('../services/studentService');

const newStudent = async (req, res) => {
  const { name, email, cpf } = req.body;
  const fields = [ name, email, cpf ];
  const teste = await studentService.findOne({where: {cpf: cpf}})
  console.log(teste)
  for (let i in fields) {
    if (!fields[i].length) {
      return res.status(400).send('Todos os campos devem ser preenchidos');
    }
  }

  if (cpf.length < 11) return res.status(400).send('CPF deve conter 11 digitos.');

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