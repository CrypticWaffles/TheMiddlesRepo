/**
 * VoteController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  voteEntryYes: async function (req, res) {
    try {
        await Vote.create({ VideoId: "Vid",choice: true, zipId: "Zip"});

        return res.redirect({ someField: '/feedback'});
    } catch (err) {
        return res.serverError(err);
    }
  },
  voteEntryNo: async function (req, res) {
    try {
        await Vote.create({ VideoId: "Vid",choice: false, zipId: "Zip"});

        return res.redirect({ someField: '/feedback'});
    } catch (err) {
        return res.serverError(err);
    }
  },
};

