module.exports.routes = {
  '/': { view: 'pages/homepage' },

  // Feedback
  '/feedback': { view: 'pages/feedback' }, // Feedback Page
  'POST /feedback': 'FeedbackController.create', // Feedback method

  // ZIP
  '/location': { view: 'pages/location' }, // ZIP Page
  'GET /api/location': 'LocationController.find', // ZIP method

  // Videos
  // Route for listing videos
  'GET /video/list': 'VideoController.list',
  // Route for playing a specific video
  'GET /video/play/:id': 'VideoController.play',
  // Route for uploading videos (display form)
  '/video/upload': { view: 'video/upload' }, // Form to upload video
  // Route to handle video upload (form submission)
  'POST /video/upload': 'VideoController.upload', // Handle video upload

  '/vote': { view: 'pages/vote' },
  'POST /vote-entryYes': 'VoteController.voteEntryYes',
  'POST /vote-entryNo': 'VoteController.voteEntryNo',
};
