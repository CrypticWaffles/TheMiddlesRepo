module.exports.routes = {
  '/gp/': { view: 'pages/homepage' },

  // Feedback
  '/gp/feedback': { view: 'pages/feedback' }, // Feedback Page
  'POST /gp/feedback': 'FeedbackController.create', // Feedback method

  // ZIP
  '/gp/location': { view: 'pages/location' }, // ZIP Page
  'GET /gp/api/location': 'LocationController.find', // ZIP method

  // Videos
  'GET /gp/video/list': 'VideoController.list',  // Show all videos
  'GET /gp/video/play/:id': 'VideoController.play',  // Play a specific video

  // Voting
  '/gp/vote': { view: 'pages/vote' },
  'POST /gp/vote': 'VoteController.vote',
};
