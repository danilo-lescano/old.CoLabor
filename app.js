var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

var controllers = [
    'About',
    'Contact',
    'Home',
];

//configure app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

// use middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'resources')));

for(let i = 0; i < controllers.length; i++) {
    app.use(require(path.join(__dirname, 'controllers/' + controllers[i] + 'Controller')));
}
app.get('/', (req, res)=>{
    res.redirect('/Home');
});


//start the server
app.listen(8005, function(){
    console.log("server listening...");
});