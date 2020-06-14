var express = require('express');

var router = express.Router();

router.get('/About/', function(req, res){
    res.render('pages/about');
});

module.exports = router;