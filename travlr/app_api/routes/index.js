// app_api/routes/index.js

const express = require('express');
const router = express.Router();

// Import controllers
const tripController = require('../controllers/tripController');
const authController = require('../controllers/authentication');


// routes
router.route('/login').post(authController.login);
router.route('/register').post(authController.register);

router.route('/trips').get(tripsController.tripsList).post(auth, tripsController.tripsAddTrip);
router.route('trips/:tripCode').get(tripsController.tripsFindCode).put(auth, tripsController.tripsUpdateTrip);



// Define routes
router.get('/trips', tripController.getAllTrips);
router.get('/trips/:code', tripController.getTripByCode); // Add this line to handle parameterized route
router.post('/trips', tripController.createTrip);
router.put('/trips/:id', tripController.updateTrip);
router.delete('/trips/:id', tripController.deleteTrip);

module.exports = router;
