const Sequelize = require('sequelize');
const dbConfig = require('../config/config.js');
const Student = require('../models/student');
const connection = new Sequelize(dbConfig);

Student.init(connection);

module.exports = connection;