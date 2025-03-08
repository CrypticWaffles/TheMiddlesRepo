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
  '/videos': { view: 'pages/videos' },
  '/location': { view: 'pages/location' },
  'GET /api/location': 'LocationController.find',
};
