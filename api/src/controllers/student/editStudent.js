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
    const checkId = await studentService.update(id, { name, email });

    if (!checkId[0]) return res.status(400).send('Id não encontrado');
    
    return res.status(200).send('Cadastro atualizado com sucesso');
  } catch (error) {
    return res.status(400).send(error.message);
  }
}


module.exports = {
  edit,
}