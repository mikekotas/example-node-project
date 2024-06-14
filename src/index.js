const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/new', (req, res) => {
  console.log('the app has entered the new endpoint');
    res.send('New endpoint');
  });

  module.exports = app;