const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/new', (req, res) => {
    res.send('New endpoint');
  });

  let server;

  if (require.main === module) {
    server = app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }

module.exports = { app, server };