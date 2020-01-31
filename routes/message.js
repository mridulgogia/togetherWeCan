const express = require("express");
const passport = require("passport");
const messageCtrl = require("../controllers/message");

const router = express.Router();

router.post(
  "/send",
  passport.authenticate("jwt", { session: false }),
  messageCtrl.sendMessage
);

module.exports = router;
