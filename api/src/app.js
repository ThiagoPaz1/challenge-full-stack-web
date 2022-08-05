const express = require('express');
const dotenv = require('dotenv');
var cors = require('cors')
const app = express();
const studentRouter = require('./routers/index');

dotenv.config();

app.use(cors())
app.use(express.json())
app.use('/student', studentRouter);

app.listen(process.env.PORT, () => {
  console.log('Serve is running')
});