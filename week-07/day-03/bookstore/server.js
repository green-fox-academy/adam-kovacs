'use strict'

const express = require('express');
require('dotenv').config();
const mysql = require('mysql');
const app = express();
const PORT = 3000;
let path = require('path');

let conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

conn.connect(function (err) {
  if (err) {
    console.log('Error connecting to Database\r\n', err);
    return;
  }
  console.log('Connection established');
});

app.use('/assets', express.static('assets'));
app.use(bodyParser.json());

app.get('/booknames/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api', (req, res) => {
  const sql = 'SELECT book_name FROM book_mast;';
  conn.query(sql, function (err, rows) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }

    res.json(rows);
  });
}); 

app.listen(PORT, () => {
  console.log(`listening to port: ${PORT}`)
});
