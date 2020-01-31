const User = require("../models/user");
const Conversation = require("../models/conversation");

exports.chat = (req, res) => {
  User.findById(req.user.id)
    .then(sender => {
      User.findById(req.params.receiverID)
        .then(() => {
          if (
            sender.directMessage.filter(
              dmReceiver => dmReceiver === req.params.receiverID
            ).length > 0
          ) {
            return res.json({ found: true });
          }
          const conversation = new Conversation({
            sender: req.user.id,
            receiver: req.params.receiver
          });
          res.json({ success: conversation });
        })
        .catch(() => {
          res.json({ chatErr: "Invalid Reciever ID" });
        });
    })
    .catch(() => {
      res.json({ chatErr: "Invalid Sender ID" });
    });
};
