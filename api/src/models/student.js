const { DataTypes } = require('sequelize');
const db = require('./index');

const Student = db.define('students', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ru: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  cpf: {
    type: DataTypes.STRING(11),
    allowNull: false
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE
  }
});

module.exports = Student;