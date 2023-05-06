const jwt =  require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const auth = asyncHandler(async (req, res, next) => {
  
  let token

  //Checks if there's a cookie in the request header
  if (req.cookies) {
    try {
      //Splits the token in the cookie to remove the 'jwt='
      token = req.cookies.split('=')[1]
      //Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      req.userId = await User.findById(decoded.id).select('-password')
      
      next()
    } catch (error) {
      res.status(401)
      throw new Error('Not authorized')
    }
  } else {
    res.status(401)
    throw new Error('Not authorized')
  }

})

module.exports = auth