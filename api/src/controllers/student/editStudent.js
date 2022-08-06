const studentService = require('../../services/studentService');

const edit = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const validEmail = /\S+@\S+\.\S+/;
  
  if (!name.length || !email.length) {
    return res.status(400).send('Todos os campos precisa esta preenchidos');
  }

  if (!validEmail.test(email)) {
    return res.status(400).send('Email inválido');
  }
  
  try {
    await studentService.update(id, { name, email });
    return res.status(200).json('Cadastro atualizado com sucesso');
  } catch (error) {
    return res.status(400).send(error.message);
  }
}


module.exports = {
  edit,
}