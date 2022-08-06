const studentService = require('../../services/studentService');

const remove = async (req, res) => {
  const { id } = req.params;

  try {
    const checkId= await studentService.remove(id);
    
    if (!checkId) return res.status(400).send('Id não encontrado');

    return res.status(200).send('Cadastro removido');
  } catch (error) {
    return res.status(400).json(error.message);
  }
}

module.exports = {
  remove,
}