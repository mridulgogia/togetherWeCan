const express = require("express");
const app = express();
const passport = require("passport");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const userRoutes = require("./routes/user");
const chatRoutes = require("./routes/chat");
const conversationRoutes = require("./routes/conversation");
const messageRoutes = require("./routes/message");

app.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Contest, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

mongoose
  .connect(
    "mongodb+srv://mridul:Radhasoami0-@cluster0-irqtw.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Mongodb Atlas connected successfully");
  })
  .catch(error => {
    console.log("Unable to connect to Mongodb Atlas!");
    console.log(error);
  });

app.use(passport.initialize());
require("./passport")(passport);
app.use(bodyParser.json());

app.use("/api/auth", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/conversation", conversationRoutes);
app.use("/api/message", messageRoutes);

module.exports = app;
