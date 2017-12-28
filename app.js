console.log('starting app.js')

var express = require('express');
var app = express();

app.use( function( req, res, next ) {
    console.log( "before" );
    next();
  });
app.get( "/hi", function( req, res, next ) {
    console.log('Request URL:', req.originalUrl);
    next();       
  });
app.use( function( req, res, next ) {
    console.log( "after" );
    next();    
  });

app.listen(3000);
console.log('Running on port 3000...');