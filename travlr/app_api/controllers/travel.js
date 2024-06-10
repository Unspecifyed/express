// Import necessary modules
const fetch = require('node-fetch');

// Define the API endpoint and options
const tripsEndpoint = 'http://localhost:3000/api/trips';
const options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
};

// Define the travel function as an async function
exports.travel = async (req, res) => {
    try {
        // Fetch data from the API endpoint
        fetch(tripsEndpoint, options)
            // Extract the JSON from the response
            .then(response => response.json())
            // Log the JSON data and render the view with it
            .then(json => {
                console.log(json); // Logging the JSON data for debugging
                res.render('travel', { title: 'Travlr Getaways', trips: json });
            })
            // Catch any errors that occur during the fetch process
            .catch(err => res.status(500).send(err.message));
    } catch (error) {
        // Handle any errors that occur during the process
        console.error('Error fetching data from API:', error);
        res.render('error', { message: 'Error fetching data from API', error });
    }
};
