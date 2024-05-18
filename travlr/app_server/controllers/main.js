/* GET Homepage */
//controllers/main.js
exports.index = function(req, res) {
	res.render('index', { title: 'Express' });
}