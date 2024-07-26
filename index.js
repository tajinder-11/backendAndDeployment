require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/twitter', (req, res) => {
  res.send('Tajinder Singh');
});

app.get('/login', (req, res) => {
  res.send('logged in');
});

app.get('/backend', (req, res) => {
  res.send(`<h1>This is Backend course</h1>`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
