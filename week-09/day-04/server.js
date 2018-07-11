'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sql = require('./static/sqlhandle');

const database = sql.makeConnection();
const app = express();
const PORT = 3000;

app.use('/static', express.static('static'));
app.use(bodyParser.json());


app.get('/questions', (req, res) => {
  Promise.resolve(sql.getQuestions(database))
    .then(function(queryData) {
      res.json(queryData);
    })
    .catch(error => {
      console.log(error.message);
    });
});


app.get('/game', (req, res) => {
  Promise.resolve(sql.getQuestions(database))
    .then(function(queryData) {
      res.json(queryData);
    })
    .catch(error => {
      console.log(error.message);
    });
});


app.listen(PORT, () => {
  console.log(`app is listening on port: ${PORT}`);
});
