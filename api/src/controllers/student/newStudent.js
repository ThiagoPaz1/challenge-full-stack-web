const studentService = require('../../services/studentService');

const validFields = async (req, res, next) => {
  const { name, email, cpf } = req.body;
  const fields = [ name, email, cpf ];
  
  for (let i in fields) {
    if (!fields[i].length) {
      return res.status(400).send('Todos os campos devem ser preenchidos');
    }
  }

  if (cpf.length < 11) return res.status(400).send('CPF deve conter 11 digitos.');

}