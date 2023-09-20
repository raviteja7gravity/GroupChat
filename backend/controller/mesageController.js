const Message = require("../models/Message");
const createRes = require("../utils/createRes");

// Your controller logic goes here
const getAllMessages = async (req, res) => {
  const all = await Message.find();
  res.send(createRes(200, "Ok", all));
};
const createMessage = async (req, res) => {
    const message = new Message({ text: 'fluffy' });
    await message.save()
    res.send(createRes(200, "wait for reponse", "Can't see database"));
};
module.exports = {
  // Define your controller methods here
  getAllMessages,
  createMessage,
};
