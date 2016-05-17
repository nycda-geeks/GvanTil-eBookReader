var express = require('express');
var bodyParser = require('body-parser');
var fs = require ('fs')
var app = express()

app.use(express.static('./resources'));

app.use(bodyParser.urlencoded({extended: true}));

app.set ('views', './src/views');
app.set ('view engine', 'pug');


// GET REQUEST

app.get('/', (request, response)=>{
	fs.readFile ('./resources/books.json', function(error, data){
		if (error){
			throw error
		} else {
			var parsedBooks = JSON.parse (data)]
			console.log (parsedBooks)
			res.render ('index', { books:parsedBooks })
		}
	})
});

// SERVER SET UP

app.listen(3000, function () {
  console.log('eBookReader listening on port 3000');
});

