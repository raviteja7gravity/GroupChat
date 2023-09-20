const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  text: String,
  // Reference to the user who sent the message
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  // Reference to the group the message belongs to
  group: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Group',
  },
  message : String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Message', messageSchema);
