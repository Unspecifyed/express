const mongoose = require('mongoose');
const Trip = mongoose.model('Trip');

// Controller to retrieve all available trips
const getAllTrips = async (req, res) => {
    try {
        const trips = await Trip.find(); // Retrieves all trips from the database
        
        // Check if the response contains data
        if (!trips || trips.length === 0) {
            return res.status(404).json({ message: 'No trips found' });
        }

        res.status(200).json(trips);     // Sends the list of trips as a JSON response
    } catch (err) {
        res.status(500).json({ message: err.message }); // Handles any errors that occur
    }
};

// Controller to retrieve a single trip by ID aa
const getTripById = async (req, res) => {
    try {
        const trip = await Trip.findById(req.params.id); // Retrieve trip by ID from the database
        
        // Check if the response contains data
        if (!trip) {
            return res.status(404).json({ message: 'Trip not found' });
        }

        res.status(200).json(trip);     // Sends the trip as a JSON response
    } catch (err) {
        res.status(500).json({ message: err.message }); // Handles any errors that occur
    }
};

module.exports = {
    getAllTrips,
    getTripById
};
