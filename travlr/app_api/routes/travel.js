// app_api/routes/travel.js

var express = require('express');
var router = express.Router();

//  data to pass to the view
var travelDestinations = [
  {
    name: 'Gale Reef',
    image: 'images/reef1.jpg',
    description: [
      'Sed et augue lorem. In sit amet placerat arcu. Mauris volutpat ipsum ac justo mollis vel vestibulum orci gravida. Vestibulum sit amet porttitor odio. Nulla facilisi. Fusce at pretium felis.',
      'Sed consequat libero ut turpis venenatis ut aliquam risus semper. Etiam convallis mi vel risus pretium sodales. Etiam nunc lorem ullamcorper vitae laoreet.'
    ]
  },
  {
    name: 'Dawson’s Reef',
    image: 'images/reef2.jpg',
    description: [
      'Integer magna leo, posuere et dignissim vitae, porttitor at odio. Pellentesque a metus nec magna placerat volutpat. Nunc nisi mi, elementum sit amet aliquet quis, tristique quis nisl. Curabitur odio lacus, blandit ut hendrerit.',
      'Vulputate, vulputate at est. Morbi aliquet viverra metus eu consectetur. In lorem dui, elementum sit amet convallis ac, tincidunt vel sapien.'
    ]
  },
  {
    name: 'Claire’s REEF',
    image: 'images/reef3.jpg',
    description: [
      'Donec sed felis risus. Nulla facilisi. Donec a orci tellus, et auctor odio. Fusce ac orci nibh, quis semper arcu. Cras orci neque, euismod et accumsan ac, sagittis molestie lorem. Proin odio sapien, elementum at tempor non.',
      'Vulputate eget libero. In hac habitasse platea dictumst. Integer purus justo, egestas eu consectetur eu, cursus in tortor. Quisque nec nunc ac mi ultrices iaculis.'
    ]
  },
  {
    name: 'New Place',
    image: 'images/new_place.jpg',
    description: [
      'Description of the new place added.'
    ]
  }
];

// GET travel page
router.get('/', function(req, res, next) {
  res.render('travel', { destinations: travelDestinations });
});

module.exports = router;
