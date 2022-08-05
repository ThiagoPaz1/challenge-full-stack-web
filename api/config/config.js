const dotenv = require('dotenv');

dotenv.config()

module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE,
    "host": "localhost",
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.DB_USER,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE,
    "host": "localhost",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE,
    "host": "localhost",
    "dialect": "mysql"
  }
}
