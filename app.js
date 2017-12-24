console.log('starting app.js')

const express = require('express');
const app = express();

app.get('/', function(req, res) {
	res.send('Hello World');
});


app.get('/echo/ontro', function(req, res) {
    res.send('ontro');
});

app.listen(3000);
console.log('Running on port 3000...');