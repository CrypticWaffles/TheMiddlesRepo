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
  '/feedback': { view: 'pages/feedback' },
  '/location': { view: 'pages/location' },
  '/videos': { view: 'pages/videos' },
  '/vote': { view: 'pages/vote' },
  'POST /vote-entryYes': 'VoteController.voteEntryYes',
  'POST /vote-entryNo': 'VoteController.voteEntryNo',
  // Route for listing videos
  'GET /video/list': 'VideoController.list',
  // Route for playing a specific video
  'GET /video/play/:id': 'VideoController.play',
};
