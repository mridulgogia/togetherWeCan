const express = require("express");
const passport = require("passport");
const conversationCtrl = require("../controllers/conversation");

const router = express.Router();

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  conversationCtrl.getConversations
);

module.exports = router;
