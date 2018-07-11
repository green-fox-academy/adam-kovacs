'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sql = require('./static/sqlhandle');
const api = require('./static/apihandle');

const database = sql.makeConnection();
const app = express();
const PORT = 3000;


app.use('/static', express.static('static'));
app.use(bodyParser.json());


app.get('/questions', (req, res) => {
  Promise.resolve(api.getAllQuestions(sql, database))
  .then(result => {
    console.log(result);
    res.json(result)})
  .catch(error => console.log(error));
});


app.get('/game', (req, res) => {
  let randomQuestionNumber = new Promise((resolve, reject) => {
    api.getRandomQuestionNumber(sql, database)
    .then(questionNumber => {
      resolve(questionNumber);
    })
  });

  randomQuestionNumber
  .then((questionNumber) => {
    return sql.getQuestionByID(database, questionNumber)
  })
  .then((question) => {
      Promise.resolve(sql.getAnswersByQuestionID(database, parseInt(question[0].id)))
      .then(answers => {
        return {
          ...question, //NEEDS SOME RETHINKING HERE
          ...answers //AS IF IT IS, IT ONLY RETURNS ANSWERS
        } 
      })
      .then((response) => {
        res.json(response);
      })
  })
});

app.listen(PORT, () => {
  console.log(`app is listening on port: ${PORT}`);
});
