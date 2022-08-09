const dotenv = require('dotenv');

dotenv.config()

module.exports = {
  username: process.env.DB_USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  host: "localhost",
  dialect: "mysql",
  define: {
    timestamps: true,
  }
}