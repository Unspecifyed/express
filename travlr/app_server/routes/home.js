var express = require('express');
var router = express.Router();
var mainController = require('../controllers/mainController');

// Home page route
router.get('/', mainController.index);

module.exports = router;
