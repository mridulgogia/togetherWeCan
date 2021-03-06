const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullname: {type: String, required: true},
  gender: {type: String, required: true},
  micEnabled: {
    type: Boolean,
    default: false
  },
  audioEnabled: {
    type: Boolean,
    default: true
  },
  directMessages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "conversation"
    }
  ]
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
