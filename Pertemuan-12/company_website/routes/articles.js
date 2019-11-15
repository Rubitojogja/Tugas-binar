var express = require ('express');
var router = express.Router();

//Define URL
router.get('/', function(req, res, next){
    res.send('Artikel Page');
});

module.exports = router;