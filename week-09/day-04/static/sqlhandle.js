module.exports = {

  makeConnection: () => {
    const mysql = require("mysql");
    require("dotenv").config();
    const sql = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE
    });
    return sql;
  },

  connect: sql => {
    sql.connect(error => {
      if (error) {
        console.log(new Error("DATABASE ERROR", error.message));
      } else {
        console.log(`CONNECTION ESTABLISHED TO: ${process.env.DB_DATABASE}`);
      }
    });
    return sql;
  },

  getQuestions: sql => {
    return sql.query('SELECT * FROM questions;');
  }
};
