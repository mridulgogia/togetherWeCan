const Message = require("../models/message");
const Conversation = require("../models/conversation");

exports.sendMessage = (req, res) => {
  if (!req.body.conversationID)
    return res.json({ messageSendError: "Conversation ID is needed" });
  if (!req.body.messageContent)
    return res.json({ messageSendError: "Message Content is needed" });
  if (req.body.messageContent.trim().length === 0)
    return res.json({ messageSendError: "Message Content cannot be empty" });
  Conversation.findById(req.body.conversationID)
    .then(conversation => {
      const message = new Message({
        sender: req.user.id,
        content: req.body.messageContent
      });
      message.save().then(msg => {
        conversation.messages.unshift(msg);
        conversation.save().then(() => {
          res.json({ success: true });
        });
      });
    })
    .catch(() => {
      res.status(404).json({ messageSendError: "Conversation Not Found" });
    });
};
