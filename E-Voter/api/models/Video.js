<<<<<<< HEAD
// api/models/Video.js
=======
/**
 * Video.js
 *
 * @description :: A model definition represents a database table/collection for storing video information.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
>>>>>>> 184651fcb671fa828e0e814a0615d921e34d7433

module.exports = {
  attributes: {
<<<<<<< HEAD
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      allowNull: true,
    },
    filePath: {
      type: 'string',
      required: true,
    },
    fileName: {
      type: 'string',
      required: true,
    },
=======

    // Video Title
    title: { 
      type: 'string', 
      required: true,
    },

    // Video Description
    description: { 
      type: 'string', 
      required: true, 
    },

    // File Path: Path to the uploaded video file
    filePath: {
      type: 'string', 
      required: true, // Path is required
    },

    // File Name: Original file name of the uploaded video
    fileName: {
      type: 'string', 
      required: true, // File name is required
    },

    // Optional: If you're storing the video URL (e.g., if using cloud storage), use this field
    // url: { 
    //   type: 'string', 
    // },

>>>>>>> 184651fcb671fa828e0e814a0615d921e34d7433
  },
};
