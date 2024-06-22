// app_api/routes/index.js

const express = require('express');
const router = express.Router();

// Import controllers
const tripController = require('../controllers/tripController');

// Define routes
router.get('/trips', tripController.getAllTrips);
router.get('/trips/:code', tripController.getTripByCode); // Add this line to handle parameterized route
router.post('/trips', tripController.createTrip);
router.put('/trips/:id', tripController.updateTrip);
router.delete('/trips/:id', tripController.deleteTrip);

module.exports = router;
