const express = require("express");
const passport = require("passport");
const chatCtrl = require("../controllers/chat");

const router = express.Router();

router.post(
  "/connect",
  passport.authenticate("jwt", { session: false }),
  chatCtrl.chat
);

module.exports = router;
