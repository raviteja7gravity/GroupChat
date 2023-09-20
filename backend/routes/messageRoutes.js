// routes/messagesRoutes.js
const express = require('express');
const router = express.Router();
const messagesController = require('../controller/mesageController');

// Define your message-related routes here
// Example:
router.get('/', messagesController.getAllMessages);
router.post('/', messagesController.createMessage);

module.exports = router;
