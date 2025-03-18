module.exports.routes = {
  '/': { view: 'pages/homepage' },

  // Feedback
  '/feedback': { view: 'pages/feedback' }, // Feedback Page
  'POST /feedback': 'FeedbackController.create', // Feedback method

  // ZIP
  '/location': { view: 'pages/location' }, // ZIP Page
  'GET /api/location': 'LocationController.find', // ZIP method

  // Videos
  'GET /video/list': 'VideoController.list',  // Show all videos
  'GET /video/play/:id': 'VideoController.play',  // Play a specific video

  // Voting
  '/vote': { view: 'pages/vote' },
  'POST /vote': 'VoteController.vote',
};
