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
      database.query(`SELECT COUNT (*) FROM ${table};`,
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

  deleteQuestionByID: (database, questionID) => {
    database.query(`DELETE FROM questions WHERE id = ${questionID};`,
      (err, deletedRows) => {
        if (err) console.log(new Error('Database error. Can not delete question'))
        else console.log(`${deletedRows.affectedRows} rows deleted`);
      })
  },

  addNewQuestion: (database, question) => {
    return new Promise((resolve, reject) => {
      let query = `INSERT INTO questions(question) VALUES(${question})`;
      database.query(query, (err) => {
        if (err) reject(err);
        let query = `SELECT MAX(id) AS id FROM questions;`
        database.query(query, (err, result) => {
          if (err) reject(err);
          resolve(result);
        })
      })
    })
  },

  addAnswersByQuestionID: (database, answersObject, question_id) => {
    answersObject.forEach((answer, i) => {
      let query = `
      INSERT INTO answers(answer, is_correct, question_id) 
      VALUES (?, ?, ?)`;
      database.query(query, [answer.answer, answer.is_correct, question_id[0].id],
        (err) => {
          if (err) console.log(err);
        });
    });
  },

  getRightAnswer: (database, questionID) => {
    let query = `
    SELECT id 
    FROM answers 
    WHERE question_id = ${questionID} 
    AND is_correct = 1;`;
    return new Promise((resolve, reject) => {
      database.query(query, (err, answerID) => {
        if (err) reject(err);
        resolve(answerID[0]);
      });
    });
  },
};
