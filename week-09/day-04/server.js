"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const sql = require("./static/sqlhandle");

const app = express();
const PORT = 3000;

const database = new Promise((resolve, reject) => {
  resolve(sql.makeConnection());
})
  .then(sql.connect) //need to make separate functions, this wont work w/ return
  .then(sql.getQuestions)
  .then(result => console.log(result));
