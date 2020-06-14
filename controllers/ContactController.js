var express = require('express');

var router = express.Router();

router.get('/Contact/', function(req, res){
    res.render('pages/contact');
});

module.exports = router;