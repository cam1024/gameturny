const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedGame` array in User.js
const gameSchema = new Schema({
    id: {
    type: String,
    required: true,
  },
    name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
});
module.exports = gameSchema;
