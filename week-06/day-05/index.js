'use strict'

const express = requiew('express');
const app = express();
const PORT = 3000;
let currentPic = 0;

import { picData } from './pic-data';


app.set('view engine', 'ejs');
app.use('/static', express.static('static'));

app.get('/', (res, req) => {
  res.render('home', {picData: picData[currentPic]});
})

app.listen(PORT, () => {
  console.log(`listening to port: ${PORT}`);
})
