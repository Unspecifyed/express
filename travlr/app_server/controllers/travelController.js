// modules and defined travelDestinations array

exports.travel = (req, res) => {
  res.render('travel', { title: 'Travel', destinations: travelDestinations });
};
