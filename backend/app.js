const express = require("express");
const app = express();
const cors = require("cors");
const wsserver = require("ws").Server;
const createRes = require("./utils/createRes");
const messagesRoutes = require("./routes/messageRoutes");
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/myChatApp");
//const ss = new wsserver({port : 5001})
app.use(cors());
app.use("/api/messages", messagesRoutes);
app.listen(5000, console.log("app started at 5000"));
