console.log('starting app.js')

var connect = require('connect');
var express = require('express');
var app = express();

var myLogger = function(req, res, next) {
    console.log('Logged');
    next();
}

var requestTime = function(req, res, next){
    req.requestTime = (new Date).getTime();
    next();
}


app.use('/echo/ontro', function (req, res, next) {
    console.log('Request URL:', req.originalUrl)
    next();
  });


app.get('/echo/ontro', function(req, res) {
    console.log('Hello World');
});

app.listen(3000);
console.log('Running on port 3000...');