const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const conversationSchema = new Schema({
  sender: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  receiver: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  messages: [
    {
      type: Schema.Types.ObjectId,
      ref: "message"
    }
  ]
});

module.exports = Conversation = mongoose.model(
  "Conversation",
  conversationSchema
);
