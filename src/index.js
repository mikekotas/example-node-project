const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/new', (req, res) => {
    res.send('New endpoint');
  });

  module.exports = app;