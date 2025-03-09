/**
 * LocationController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const axios = require('axios'); //Used for making API calls

module.exports = {
  find: async function(req, res) {
    let zip = req.query.zip;
    if (!zip) { // Check if zip code is provided
      return res.status(400).json({ error: 'Missing zip code' });
    }

    let apiUrl = `https://api.zippopotam.us/us/${zip}`; // API endpoint
    try {
      let response = await axios.get(apiUrl); // Make the API call
      let locationData = response.data.places[0]; // Get the location data

      return res.json({ // Return the location data
        state: locationData.state,
        city: locationData['place name']
      });

    } catch (error) { // Handle errors
      return res.status(400).json({ error: 'Invalid ZIP code or API issue' });
    }
  }
};
