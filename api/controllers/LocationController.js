/**
 * LocationController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 *
 * If you launch the app with `sails console`,
 * you can acess the database directly using await 'Location.find()'
 */
const axios = require('axios');

module.exports = {
  find: async function(req, res) {
    let zip = req.query.zip;

    if (!zip) {
      return res.status(400).json({ error: 'Missing ZIP code' });
    }

    let apiUrl = `https://api.zippopotam.us/us/${zip}`;
    try {
      let response = await axios.get(apiUrl);
      let locationData = response.data.places[0];

      let state = locationData.state;
      let city = locationData['place name'];

      // Check if ZIP code already exists in the database
      let existingLocation = await Location.findOne({ zip });
      if (!existingLocation) {
        // Save new ZIP code data in the database
        await Location.create({ zip, state, county: city });
        console.log(`Saved ZIP ${zip} - ${state}, ${city} to database`);
      } else {
        console.log(`ZIP ${zip} already exists in database`);
      }

      return res.json({ state, city });

    } catch (error) {
      return res.status(400).json({ error: 'Invalid ZIP code or API issue' });
    }
  }
};
