require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

const messageRoute = require('./server/routes/');

app.use(cors());
app.use(express.json());

app.use('/', messageRoute);

app.listen(process.env.PORT, () => {
  console.log('listening on 5000');
});
