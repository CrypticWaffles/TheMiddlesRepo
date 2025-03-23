/**
 * Video.js
 *
 * @description :: A model definition represents a database table/collection for storing video information.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    // Video Title
    title: { type: 'string', required: true,},
    // url
    url: { type: 'string',required: true },
  },
};
