const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 8000;

app.use(cors());

const url = 'mongodb://localhost:27017/Finance';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json())

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});