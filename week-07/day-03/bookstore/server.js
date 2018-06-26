'use strict'

const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3000;

let conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'bookstore',
});

conn.connect(function (err) {
  if (err) {
    console.log('Error connecting to Database\r\n', err);
    return;
  }
  console.log('Connection established');
});

app.get('/booknames/', (req, res) => {
  conn.query('SELECT book_name FROM book_mast;', function(err, rows) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
  res.send(rows);
  });
}),

  app.listen(PORT, () => {
    console.log(`listening to port: ${PORT}`);
  });
