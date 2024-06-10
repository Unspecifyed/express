const mongoose = require('mongoose');
const Trip = require('./travlr');
const tripsData = require('../../app_server/data/trips.json');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/travlr', { useNewUrlParser: true, useUnifiedTopology: true });

// Seed data function
const seedDatabase = async () => {
  try {
    // Clear existing data
    await Trip.deleteMany({});
    console.log('Existing data cleared.');

    // Insert seed data
    await Trip.insertMany(tripsData);
    console.log('Seed data inserted successfully.');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // Close connection
    mongoose.disconnect();
    console.log('Connection closed.');
  }
};

// Call the seed function
seedDatabase();
