/**
 * VideoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
  // Action to display all videos
  list: async function(req, res) {
    try {
      const videos = await Video.find();
      return res.view('video/list', { videos }); 
    } catch (err) {
      return res.serverError(err);
    }
  },

  // Action to display a single video and allow playback
  play: async function(req, res) {
    try {
      const videoId = req.params.id; 
      const video = await Video.findOne({ id: videoId });

      if (!video) {
        return res.notFound('Video not found.');
      }

      return res.view('video/play', { video }); 
    } catch (err) {
      return res.serverError(err);
    }
  }

};

