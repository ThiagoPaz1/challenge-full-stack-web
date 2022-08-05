const express = require('express');
const dotenv = require('dotenv');
var cors = require('cors')
const app = express();
 
dotenv.config();

app.use(cors())
app.use(express.json())
// app.use('/student');

app.listen(process.env.PORT, () => {
  console.log('Serve is running')
});