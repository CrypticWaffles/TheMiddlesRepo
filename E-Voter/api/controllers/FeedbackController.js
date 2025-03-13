/**
 * FeedbackController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  create: async function (req, res) {
    console.log('Received Feedback: ',req.body); // debugging

    let {message} = req.body;

    // Validate the feedback message
    if (!message || message.trim() === '') {
      return res.status(400).json({ error: 'Missing feedback message' });
    }

    // Save the feedback to the database
    try {
      await Feedback.create({message});
      return res.json({ message: 'Feedback saved successfully' });
    } catch (error) {
      return res.status(500).json({ error: 'Failed to save feedback' });
    }
  }
};
