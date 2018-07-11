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
        if (err) {
          console.log(err);
          reject(null);
        }
        resolve(rows);
      });
    });
  },

  getRandomQuestion: database => {
    return new Promise((resolve, reject) => {
      database.query('SELECT * FROM questions;', (err, rows) => {
        if (err) {
          console.log(err);
          reject(null);
        }
        resolve(rows);
      });
    });
  }

  
};
