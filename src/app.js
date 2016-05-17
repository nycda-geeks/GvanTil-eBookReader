var express = require('express');
var bodyParser = require('body-parser');
var fs = require ('fs')

var app = express()

app.use(express.static('Public'));

app.use(bodyParser.urlencoded({extended: true}));

app.set ('views', './src/views');
app.set ('view engine', 'pug');


// GET REQUEST

app.get('/', function(request, response){
	response.render ('index');
});

// SERVER SET UP

app.listen(3000, function () {
  console.log('eBookReader listening on port 3000');
});

