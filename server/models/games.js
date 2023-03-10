const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedgame` array in User.js
const gameSchema = new Schema({
    game_id: {
    type: String,
    required: true,
  },
     title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  genres: {
    type: String,
  },

});
module.exports = gameSchema;