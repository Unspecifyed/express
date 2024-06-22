// app_api/models/travlr.js
const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    // Add other fields as necessary
});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;
