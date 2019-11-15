var express = require('express');
var router = express.Router();

//require controller
var client_controller = require('../controllers/clientController.js');

var application_Conroller = require('../controllers/applicationController.js');


/* GET home page. */

router.get('/',application_Conroller.home);
router.get('/about',application_Conroller.about);
router.get('/contact', application_Conroller.contact);
router.get('/cats',application_Conroller.cats);
router.get('/client',client_controller.list_all_client);

module.exports = router;
