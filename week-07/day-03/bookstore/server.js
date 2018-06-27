'use strict'

const express = require('express');
require('dotenv').config();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
let path = require('path');
const fs = require('fs');
const PORT = 3000;
let sql;

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

app.get('/booknames/?', (req, res) => {
  sql = queryHandler(req.query);
  res.sendFile(path.join(__dirname, '/assets/index.html'));
});

app.get('/api', (req, res) => {
  conn.query(sql, function (err, rows) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }

    res.json(rows);
  });
});

app.get('/addusers', (req, res) => {
  let userObject = csvTojs(fs.readFileSync('./assets/users.csv', 'utf-8'));
  console.log(userObject[988]);
}); 

app.listen(PORT, () => {
  console.log(`listening to port: ${PORT}`)
});

let queryHandler = (queries) => {
  sql = `SELECT book_name, aut_name, cate_descrip, pub_name, book_price 
  FROM book_mast, author, category, publisher
  WHERE author.aut_id = book_mast.aut_id
  AND category.cate_id = book_mast.cate_id
  AND publisher.pub_id = book_mast.pub_id`
  if (queries.category) {
    sql += `\r\nAND category.cate_descrip = ${conn.escape(queries.category)}`;
  }
  if (queries.publisher) {
    sql += `\r\nAND publisher.pub_name = ${conn.escape(queries.publisher)}`;
  }
  if (queries.plt) {
    sql += `\r\nAND book_mast.book_price < ${parseInt(queries.plt)}`;
  }
  if (queries.pgt) {
    sql += `\r\nAND book_mast.book_price > ${parseInt(queries.pgt)}`;
  }
  sql += ';';
  return sql;
}

let csvTojs = (csv) => {
  let lines = csv.split("\n");
  let result = [];
  let headers = lines[0].split(",");
  let obj = {};

  for (let i = 1; i < lines.length; i++) {

    let row = lines[i],
      queryIdx = 0,
      startValueIdx = 0,
      idx = 0;

    if (row.trim() === '') { continue; }

    while (idx < row.length) {
      let c = row[idx];

      if (c === '"') {
        do { c = row[++idx]; } while (c !== '"' && idx < row.length - 1);
      }

      if (c === ',' || idx === row.length - 1) {
        let length = idx - startValueIdx;
        if (idx === row.length - 1) {
          length++;
        }
        let value = row.substr(startValueIdx, length).trim();

        if (value[0] === '"') { value = value.substr(1); }
        if (value[value.length - 1] === ',') { value = value.substr(0, value.length - 1); }
        if (value[value.length - 1] === '"') { value = value.substr(0, value.length - 1); }

        let key = headers[queryIdx++];
        obj[key] = value;
        startValueIdx = idx + 1;
      }
      ++idx;
    }
    result.push(obj);
  }
  return result;
}
