var path = require('path');
var DBService = require(path.join(__dirname.replace("controllers", ""), "servico/DBService.js"));
var express = require('express');

const db = new DBService();

var router = express.Router();

router.get('/Home/', function(req, res){
    var obj = { blogCards: db.GetBlogCards() };
    res.render('pages/home', obj);
});

module.exports = router;