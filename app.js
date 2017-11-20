console.log("App start");

var express = require('express');
var todoController = require('./controllers/todoController');
var app = express();

//set static files

app.use(express.static('./public'));

app.set('view engine', 'ejs');

todoController(app);

app.listen(3333);

console.log("server started at 3333");