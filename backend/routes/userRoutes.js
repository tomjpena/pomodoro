const express = require("express")

// Create router variable to direct routes
const router = express.Router()

// Import functions from userController
const { registerUser, loginUser } = require('../controllers/userController')

router.post('/', registerUser)

router.post('/login', loginUser)

module.exports = router