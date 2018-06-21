'use strict'
import {forecasts} from './citylist'

const express = require('express');
const app = express();
const PORT = 3001;

app.set('view engine', 'ejs');
app.use('/static', express.static('static'));

app.get('/', (req, res) => {
  res.render('dashboard');
});

app.get('/cities/:cityID', (req, res) => {
  let cityID = req.params.cityID;
  res.render('details', {cityData: forecasts.cityID});
});

app.listen(PORT, () => {
  console.log(`listening to port: ${PORT}`);
})