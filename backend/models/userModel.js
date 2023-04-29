const { Mongoose } = require("mongoose");

// User Schema
const UserSchema = new Mongoose.Schema({
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

module.exports = Mongoose.model('User', UserSchema)