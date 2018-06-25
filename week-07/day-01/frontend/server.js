const express = require('express');
const app = express();
const PORT = 8080;
const bodyParser = require('body-parser');

app.use('/assets', express.static('assets'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/doubling/', (req, res) => {
  if (req.query.input) {
    res.json({
      received: req.query.input,
      result: req.query.input * 2,
    });
  } else {
    res.json({
      error: 'Please provide an input!',
    });
  }
});

app.get('/greeter', (req, res) => {
  if (req.query.name && req.query.title) {
    res.json({
      welcome_message: `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`,
    });
  } else if (!req.query.name) {
    res.json({
      error: "Please provide a name!",
    });
  } else {
    res.json({
      error: "Please provide a title!",
    });
  }
});

app.get('/appenda/:appendable', (req, res) => {
  if (req.params) {
    console.log(req.params.appendable);
    res.json({
      appended: `${req.params.appendable}a`,
    });
  } else {
    res.status(404).send('Page not found');
  }
});

app.post('/dountil/:what', (req, res) => {
  if (req.params.what === 'sum') {
    let result = 0;
    for (let i = 1; i <= req.body.until; i++) {
      result += i;
    }
    res.json({
      result: result,
    });
  } else if (req.params.what === 'factor') {
    function refactorio(n) {
      if (n === 1) {
        return 1;
      }
      return n * refactorio(n - 1)
    }
    res.json({
      result: refactorio(req.body.until),
    });
  } else {
    res.json({
      error: 'Please provide a number!',
    });
  }
});

app.post('/arrays/', (req, res) => {
  try {
    if (!(req.body.what && req.body.numbers)) {
      res.json({
        error: 'Please provide what to do with the numbers!'
      });
    } else if (req.body.what === 'sum') {
      res.json({
        result: req.body.numbers.reduce((a, b) => a + b, 0),
      });
    } else if (req.body.what === 'multiply') {
      res.json({
        result: req.body.numbers.reduce((a, b) => a * b, 1),
      });
    } else if (req.body.what === 'double') {
      res.json({
        result: req.body.numbers.map(n => { return 2 * n }),
      });
    } else {
      res.json({
        error: 'Please provide what to do with the numbers!',
      });
    }
  } catch (err) {
    res.json({
      error: 'Please provide what to do with the numbers!',
    });
  }
});

app.post('/sith', (req, res) => {
  if (req.body.text === null | undefined) {
    res.json({
      error: 'Feed me some text you have to, padawan young you are. Hmmm.',
    });
  } else {
    req.body.text.split('. ').forEach(element => {

      let capitalArray = []
      let newArray = [];
      let returnText = '';

      console.log(element);
      element.split(' ').forEach((word, i) => {
        console.log(word, word[0]);
        if (word[0] === word[0].toUpperCase()) {
          capitalArray.push(i);
        }
        word = word.toLowerCase();
        if (i % 2 === 1) {
          let temp = newArray.pop();
          newArray.push(word)
          newArray.push(temp);
        } else {
          newArray.push(word);
        }

      });
      console.log(capitalArray);
      capitalArray.forEach(point => {
        console.log(newArray[point][0])
        newArray[point][0] = newArray[point][0].toUpperCase();
      });
      element = newArray.join(' ');
      console.log(element);
      returnText += newArray;
    });
    res.json({
      sith_text: returnText,
    });
  }
});

app.listen(PORT, () => {
  console.log(`listening to port: ${PORT}`);
});
