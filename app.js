const express = require('express');
const path = require('path');
const app = express();
const FizzBuzzController = require('./controller/fizzfuzzController');
const fizzBuzzController = new FizzBuzzController();

app.get('/range/:start/:end', (req, res) => {
  console.log('in range route');
  fizzBuzzController.processNumbers(req, res);
});

app.get('/range/', (req, res) => {
  console.log('in empty range route');
  res.sendFile(path.join(__dirname+'/README.html'));
});

app.get('/', (req, res) => res.redirect('/range'));

app.listen(8888, () => console.log('Server is up and running on Port 8888!'));

module.exports = app;
