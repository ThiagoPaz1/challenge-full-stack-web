const { Model, DataTypes } = require('sequelize');

class Student extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ru: {
        type: DataTypes.INTEGER,
        defaultValue: 10000,
        allowNull: false,
      },
      cpf: {
        type: DataTypes.STRING(11),
        allowNull: false,
      }
    }, {
      sequelize,
      modelName: 'student',
    })
  }
}

module.exports = Student;