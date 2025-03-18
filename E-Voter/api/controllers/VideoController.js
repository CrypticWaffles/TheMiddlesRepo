/**
 * VideoController
 *
 * @description :: Server-side actions for handling incoming requests related to videos.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  // List all videos
  list: async function(req, res) {
    let videos = await Video.find();
    return res.view('pages/videoList', { videos });
  },

  // Play a specific video
  play: async function(req, res) {
    let video = await Video.findOne({ id: req.params.id });
    if (!video) {
      return res.status(404).send('Video not found');
    }
    return res.view('pages/videoPlay', { video });
  }
};
