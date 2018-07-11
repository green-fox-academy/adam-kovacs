module.exports = {
  makeConnection: () => {
    const mysql = require('mysql');
    require('dotenv').config();
    const database = mysql.createConnection({
      host: 1234,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE
    });
    return database;
  },

  getQuestions: database => {
    return new Promise((resolve, reject) => {
      database.query('SELECT * FROM questions;', (err, rows) => {
        if (err) reject(err);
        resolve(rows);
      });
    });
  },

  countRows: (database, table) => {
    return new Promise((resolve, reject) => {
      database.query(`SELECT COUNT (*) FROM ${table}`,
        (err, rows) => {
          if (err) reject(err);
          resolve(rows);
        });
    });
  },

  getQuestionByID: (database, questionID) => {
    return new Promise((resolve, reject) => {
      database.query(`SELECT * FROM questions WHERE id = ${questionID};`,
        (err, question) => {
          if (err) reject(question);
          resolve(question);
        })
    });
  },

  getAnswersByQuestionID: (database, questionID) => {
    return new Promise((resolve, reject) => {
      database.query(`SELECT * FROM answers WHERE question_id = ${questionID};`,
        (err, answers) => {
          if (err) reject(answers);
          resolve(answers);
        })
    })
  },
};
