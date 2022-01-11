const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "please enter a name"],
    },
    email: {
      type: String,
      required: [true, "please enter an email"],
      unique: true,
      lowercase: true,  
      // validate: [isEmail, "please enter a valid email"],
    },
    password: {
      type: String,
      required: [true, "please enter an password"],
      minlength: [6, "enter more than 6"],
    },
    appointments: { type: Array, default: [] },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("user", UserSchema);
module.exports = User;
