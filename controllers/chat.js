const User = require("../models/user");
const Conversation = require("../models/conversation");

exports.chat = (req, res) => {
  if (!req.body.receiverID)
    return res.status(400).json({ chatErr: "Receiver ID is required" });
  User.findById(req.user.id)
    .then(sender => {
      User.findById(req.body.receiverID)
        .then(receiver => {
          if (
            sender.directMessages.filter(
              dmReceiver => dmReceiver.toString() === req.body.receiverID
            ).length > 0
          ) {
            return res.json({ found: true });
          }
          const conversation = new Conversation({
            sender: req.user.id,
            receiver: req.body.receiverID
          });
          conversation.save().then(conversation => {
            sender.directMessages.push(req.body.receiverID);
            receiver.directMessages.push(req.user.id);
            sender.save().then(() => {
              receiver.save().then(() => {
                res.json({
                  conversation: conversation.id
                });
              });
            });
          });
        })
        .catch(() => {
          res.json({ chatErr: "Invalid Reciever ID" });
        });
    })
    .catch(() => {
      res.json({ chatErr: "Invalid Sender ID" });
    });
};
