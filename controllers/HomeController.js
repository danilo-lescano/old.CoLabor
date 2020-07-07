var express = require('express');

var router = express.Router();

router.get('/Home/', function(req, res){
    var teste1 = "thais lescano é uma linda";
    res.render('pages/home', {teste1: "thais lescano é uma linda"});
});

module.exports = router;