const Conversation = require("../models/conversation");

exports.getConversations = (req, res) => {
  let limit = 20,
    skip = 0;
  if (req.query.limit && parseInt(req.query.limit <= 20)) {
    limit = req.query.limit;
  }
  if (req.query.skip && !isNaN(parseInt(req.query.limit))) {
    skip = req.query.skip;
  }
  if (!req.body.conversationID)
    return res.json({ conversationFetchError: "Conversation ID is needed" });
  Conversation.findById(req.body.conversationID, "messages")
    .populate("messages", ["sender", "content", "createdAt"], null, null, {
      limit: limit,
      skip: skip
    })
    .then(conversation => {
      res.json(conversation.messages);
    })
    .catch(err => {
      res
        .status(404)
        .json({ conversationFetchError: "Conversation Not Found" });
    });
};
