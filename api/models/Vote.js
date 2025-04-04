/**
 * Vote.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    VideoId: { type: 'number' },
    zipId: { type: 'string' },
    choice: { type: 'boolean' }
  },
  datastore: 'default'
};

