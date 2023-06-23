const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

// @desc Registers user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
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


// @desc Logs user in
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body
  
  // Pull user from db
  const user = await User.findOne({ username })

  // Check fields to see if they are filled
  if (!username || !password) {
    res.status(400)
    throw new Error('Please enter all fields')
  }
  
  // Check if password entered matches password in DB
  const passwordMatch = await bcrypt.compare(password, user.password)

  // Check to see if user exists and password match
  if (user && passwordMatch) {
    const token = generateToken(user._id)

    res.set('Access-Control-Allow-Credentials', 'true');
    res.cookie('jwt', token, { httpOnly: false, maxAge: 86400000 })
    return res.status(201).json({
      _id: user._id,
      username: user.username,
    })
  } else {
    res.status(401)
    throw new Error('Incorrect username or password. Please try again')
  }
})

// @todo Fix this function. Postman just hangs after sending request. Tried using .save() and .findOneAndUpdate(). Save will actually change the password.
// @desc Update user info
// @route POST /api/users/login
// @access Public
// const updatePassword = asyncHandler(async (req, res) => {
//   const { username, password, newPassword } = req.body

//   const user = await User.findOne({ username })

//   if (!username || !password) {
//     res.status(400)
//     throw new Error('Please enter all fields')
//   }

//   const passwordMatch = await bcrypt.compare(password, user.password)

//   if (user && passwordMatch) {
//     const salt = await bcrypt.genSalt(10)
//     const hashedPassword = await bcrypt.hash(newPassword, salt)
//     await User.findOneAndUpdate({ username }, { password: hashedPassword})

//     return res.status(200)
//   } else {
//     res.status(400)
//     throw new Error('Something went wrong. Password not updated')
//   }

// })

// Function to generate token used in register and login
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {expiresIn: '24h'})
}

module.exports = {
  registerUser,
  loginUser,
}