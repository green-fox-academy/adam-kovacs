'use strict'

const express = require('express');
const app = express();
const PORT = 3000;
const frontPage = 'index.html'

app.get('/', (req, res) => {
  res.send(frontPage);
});

app.listen(PORT, () => {
  console.log(`yayz port is running: ${PORT}`);
});