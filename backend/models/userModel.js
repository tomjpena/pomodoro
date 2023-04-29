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
},
{
  timestamps: true
})

module.exports = mongoose.model('User', UserSchema)