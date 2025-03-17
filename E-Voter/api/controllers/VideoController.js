/**
 * VideoController
 *
 * @description :: Server-side actions for handling incoming requests related to videos.
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
  },

  // Action to display the add video form
  add: function(req, res) {
    return res.view('video/add');  // The form to add a video
  },

  // Action to handle video upload
  upload: async function(req, res) {
    try {
      if (!req.is('multipart')) {
        return res.badRequest('Expected multipart request');
      }

      // Handling the file upload
      req.file('video').upload({
        dirname: require('path').resolve(sails.config.appPath, 'assets/uploads/videos'),
        maxBytes: 100 * 1024 * 1024  // Maximum file size: 100 MB
      }, async (err, uploadedFiles) => {
        if (err) {
          return res.serverError(err);
        }

        if (uploadedFiles.length === 0) {
          return res.badRequest('No video file uploaded.');
        }

        // Storing video details in the database
        const video = await Video.create({
          title: req.body.title || 'Untitled Video',
          description: req.body.description || '',
          filePath: uploadedFiles[0].fd,
          fileName: uploadedFiles[0].filename,
        }).fetch();

        return res.redirect('/video/list'); // Redirect to video list after upload
      });
    } catch (err) {
      return res.serverError(err);
    }
  },

};
