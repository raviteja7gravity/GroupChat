const mongoose = require("mongoose");
const { Group } = require("./Group"); // Import the Group model
const { User } = require("./User"); // Import the User model
// Define the Session schema
const sessionSchema = new mongoose.Schema({
  sessionId: String,
  messages: [
    {
      groupName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Group", // Reference to the Group model
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Reference to the User model
      },
      message: String,
    },
  ],
});

const Session = mongoose.model("Session", sessionSchema);

// Export the models
module.exports = { Group, User, Session };
