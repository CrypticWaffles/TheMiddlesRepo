/**
 * VoteController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  vote: async function (req, res) {
    try {
      console.log('Vote request received at:', new Date().toISOString());
      console.log('Request body:', req.body);

      // Extract the vote data from the request
      let { VideoID, choice, zipId } = req.body;
      console.log(`Extracted Vote Data - VideoID: ${VideoID}, Choice: ${choice}, ZipID: ${zipId}`);

      // Validate the data
      if (!VideoID || typeof choice !== 'boolean' || !zipId) {
        console.log('Invalid vote data received', { VideoID, choice, zipId });
        return res.badRequest({ error: 'Invalid vote data' });
      }

      console.log('Saving vote to the database...');

      // Save the vote to the database
      await Vote.create({ VideoId: VideoID,choice: choice, zipId: zipId});
      console.log('Vote saved successfully');

      // Redirect to the feedback page
      console.log('Redirecting to feedback page...');
      return res.redirect('/gp/feedback');
    } catch (err) {
      // Handle server errors
      console.error('Error processing vote:', err);
      return res.serverError(err);
    }
  }
};
