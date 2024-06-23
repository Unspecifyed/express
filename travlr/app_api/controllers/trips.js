// app_api/controllers/trips.js

const mongoose = require('mongoose');
const Trip = mongoose.model('Trip');
const User = mongoose.model('User'); // Assuming you have a User model defined

// Controller to retrieve all available trips
const getAllTrips = async (req, res) => {
    try {
        const trips = await Trip.find(); // Retrieves all trips from the database

        // Check if the response contains data
        if (!trips || trips.length === 0) {
            return res.status(404).json({ message: 'No trips found' });
        }

        res.status(200).json(trips); // Sends the list of trips as a JSON response
    } catch (err) {
        res.status(500).json({ message: err.message }); // Handles any errors that occur
    }
};

// Controller to retrieve a single trip by ID
const getTripById = async (req, res) => {
    try {
        const trip = await Trip.findById(req.params.id); // Retrieve trip by ID from the database

        // Check if the response contains data
        if (!trip) {
            return res.status(404).json({ message: 'Trip not found' });
        }

        res.status(200).json(trip); // Sends the trip as a JSON response
    } catch (err) {
        res.status(500).json({ message: err.message }); // Handles any errors that occur
    }
};

// Function to retrieve a user and pass it to a callback
const getUser = async (req, res, callback) => {
    try {
        const user = await User.findById(req.params.userId); // Retrieve user by ID from the database

        // Check if the response contains data
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        callback(req, res, user); // Pass the user to the callback function
    } catch (err) {
        res.status(500).json({ message: err.message }); // Handles any errors that occur
    }
};

const tripsAddTrip = async (req, res) => {
    getUser(req, res, (req, res) => {
        Trip.create({
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        },
    (err, trip) => {
        if (err) {
            return res.status(400).json(err);
        }else {
            return res.status(201).json(trip);
        }
    });
    });
}

const tripsUpdateTrip = async (req, res) => {
getUser(req, res,
(req, res) => {
Trip
.findOneAndUpdate({'code': req.params.tripCode },{
code: req.body.code,
name: req.body.name,
length: req.body.length,
start: req.body.start,
resort: req.body.resort,
perPerson: req.body.perPerson,
image: req.body.image,
description: req.body.description
}, { new: true })
.then(trip => {
if (!trip) {
return res
.status(404)
.send({
message: "Trip not found with code"
 + "req.params.tripCode"
});
}
res.send(trip);
}).catch(err => {
if (err.kind === 'ObjectId') {
return res
.status(404)
.send({
message: "Trip not found with code"
 + "req.params.tripCode"
});
}
return res
.status(500) // server error
.json(err);
});
}
);
}
module.exports = {
    getAllTrips,
    getTripById,
    getUser
};
