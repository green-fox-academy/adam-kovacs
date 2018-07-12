'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sql = require('./static/sqlhandle');
const api = require('./static/apihandle');

const database = sql.makeConnection();
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({
  extended: true
}));

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
          id: question[0].id,
          question: question[0].question,
          answers
        } 
      })
      .then((response) => {
        res.json(response);
      })
  })
});

app.delete('/questions/:id', (req, res) => {
  sql.deleteQuestionByID(database, req.params.id);
});

app.post('/questions', (req, res) => {
  Promise.resolve(sql.addNewQuestion(database, req.body.question))
  .then((questionID) => {
    return sql.addAnswersByQuestionID(database, JSON.parse(req.body.answers), questionID);
  })
});

app.listen(PORT, () => {
  console.log(`app is listening on port: ${PORT}`);
});
