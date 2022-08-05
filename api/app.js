const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

app.use(express.json())
// app.use('/student');

app.listen(process.env.PORT, () => {
  console.log('Serve is running')
});