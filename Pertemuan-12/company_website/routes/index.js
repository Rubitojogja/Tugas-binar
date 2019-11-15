var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Belajar Express.js',
author:'Rubito' });
});

router.get('/about', function(req, res, next ){
  res.render('about');
});

router.get('/contact', function(req, res, next ){
  res.render('contact');
});

router.get('/testimonial', function(req, res, next ){
  res.render('testimonial');
});





module.exports = router;
