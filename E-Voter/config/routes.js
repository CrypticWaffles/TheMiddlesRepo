/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  '/': { view: 'pages/homepage' },
  // Feedback
  '/feedback': { view: 'pages/feedback' }, // Feedback Page
  'POST /feedback': 'FeedbackController.create', // Feedback method
  //'/videos': { view: 'pages/videos' },
  // ZIP
  '/location': { view: 'pages/location' }, // ZIP Page
  'GET /api/location': 'LocationController.find', // ZIP method
  // Videos
  // Route for listing videos
  'GET /video/list': 'VideoController.list',
  // Route for playing a specific video
  'GET /video/play/:id': 'VideoController.play',
  '/vote': { view: 'pages/vote' },
};
