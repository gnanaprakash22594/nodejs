console.log('starting app.js')

var express = require('express');
var app = express();


app.use(function(req, res, next ) {
    console.log("before" );
    next();
  });

app.use(function(req, res, next ) {
    console.log("after" );
    next();    
  });

app.use(function(req, res, next){
  if (req.originalUrl === "/hi" || req.originalUrl === "/hello" || req.originalUrl === "/test") {
    console.log("login not required");
  }
  
  else{
    console.log("login required");
  }
  next();
});

app.get('/hi', function(req, res) {
    console.log("hi");
});

app.get('/hello', function(req, res){
    console.log("hello");
});

app.get('/test', function(req, res){
    console.log("test");
});

app.get('player', function(req, res){
    console.log("player");
});

app.get('user', function(req, res){
    console.log("user");
})
app.listen(3000);
console.log('Running on port 3000...');