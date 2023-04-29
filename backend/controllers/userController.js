const asynHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

// @desc Registers user
// @route Post /api/users
// @access Public
const registerUser = asynHandler(async (req, res, next) => {
  const { username, password } = req.body

  // Check if password length is >= 6
  if (password.length < 6) {
    res.status(400)
    throw new Error('Password has less than 6 characters')
  }
  // Check if all fields are filled
  if (!username || !password) {
    res.status(400)
    throw new Error('Please enter all fields')
  }
  // Check if user exists
  const userExists = await User.findOne({username})
  if (userExists) {
    res.status(400)
    throw new Error('This username already exists')
  }

  // Hash password to store in db
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  try {
    // Create new user in db
    const user = await User.create({
      username,
      password: hashedPassword,
    })
  
    // Generate JWT
    const token = generateToken(user._id)
  
    // Put token into a cookie and send response
    res.cookie('jwt', token, { httpOnly: true, maxAge: 86400000 })
    return res.status(201).json({
      _id: user._id,
      username: user.username,
    })
  } catch (error) {
    res.status(400)
    throw new Error('Error: User not created')
  }
 
})


const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {expiresIn: '24h'})
}

module.exports = {
  registerUser
}