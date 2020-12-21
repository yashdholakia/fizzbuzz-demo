const express = require('express');
const app = express();
const FizzBuzzController = require('./controller/fizzfuzzController');
const fizzBuzzController = new FizzBuzzController();

app.get('/range/:start/:end', (req, res) => {
    console.log('in range route');
    fizzBuzzController.processNumbers(req, res);
});


app.get('/hello', (req, res) => {
    // fizzBuzzController.processNumbers(req, res);
    res.send('hello');
});


app.get('/', (req, res) => res.send('Hello Bindas World!'));



app.listen(8888, () => console.log('Server up'));