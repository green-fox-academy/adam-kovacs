'use strict';

const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const path = require('path');
var multer = require('multer');
var upload = multer();
const PORT = 3000;

function createResponseHTML(username, email) {
  return `<h1>Thanks ${username}, we will send updates to ${email}</h1>`
}

app.use('/static', express.static('static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/signup', upload.array(), (req, res) => {
  res.send(createResponseHTML(req.body.username, req.body.email));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static/index.html'));
});

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});
