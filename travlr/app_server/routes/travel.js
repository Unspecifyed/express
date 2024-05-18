var express = require('express');
var router = express.Router();
var travlrController = require('../controllers/travlrController');

router.get('/', travlrController.travel);

module.exports = router;
