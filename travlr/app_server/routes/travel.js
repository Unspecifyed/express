var express = require('express');
var router = express.Router();
var travelController = require('../controllers/travelController');

router.get('/', travelController.travel);

module.exports = router;
