/**
 * VoteController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  vote: async function (req, res) {
    try {
      // Extract the vote data from the request
      let { VideoID, choice, zipId } = req.body;

      // Save the vote to the database
      await Vote.create({ VideoId: VideoID,choice: choice, zipId: zipId});

      // Redirect to the feedback page
      return res.redirect('/feedback');
    } catch (err) {
      // Handle server errors
      return res.serverError(err);
    }
  }
};
