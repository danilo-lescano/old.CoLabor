var express = require('express');

var router = express.Router();

router.get('/Home/', function(req, res){
    res.render('pages/home');
});

module.exports = router;