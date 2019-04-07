/*'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);*/


const express = require('express');
const app = express();
const path = ('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {

    res.sendFile('Page1.html', { root: __dirname });
});

app.get('/submit', (req, res) => {
    res.sendFile('Page1.html', { root: __dirname });
  /*  console.log({
        name: req.body.name,
        message: req.body.message
    });
    res.send('Thanks for your message, ' + req.body.name + '! It said: ' + req.body.message);*/
});

app.post('/submit', (req, res) => {
    console.log({
        name: req.body.name,
       // message: req.body.message
    });
    res.send('Hello, ' + req.body.name );
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log('Server listening on port ${PORT]...');
});
