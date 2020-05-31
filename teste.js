var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

//configure app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

// use middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'resources')));

app.use('/teste', require('./todo'));
app.use(require('./todo'));


var todoItems = [
    { id: 1, desc: 'foo' },
    { id: 2, desc: 'bar' },
    { id: 3, desc: 'baz' }
];


//define routes
app.get('/', function(req, res){
    res.render('index', {
        title: 'My App',
        items: todoItems
    });
});
app.post('/add', function(req, res){
    var newItem = req.body.newItem;
    todoItems.push({
        id: todoItems.length + 1,
        desc: newItem
    });
    res.redirect('/');
});

//start the server
app.listen(8005, function(){
    console.log("server listening...");
});