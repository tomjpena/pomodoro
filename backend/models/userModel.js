const { mongoose } = require("mongoose");

// User Schema
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    minlength: 6,
    required: true,
  },
  streak: {
    type: Number,
    default: 0,
  },
  lastSession: {
    type: String,
    default: ''
  }
},
{
  timestamps: true
})

module.exports = mongoose.model('User', UserSchema)