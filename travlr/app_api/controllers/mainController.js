// app_api/controllers/mainControllers.js

// GET Homepage 
exports.index = function(req, res) {
	res.render('index', { title: 'Express' });
}