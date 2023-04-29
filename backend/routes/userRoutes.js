const express = require("express")

// Import functions from userController
const { registerUser } = require('../controllers/userController')

// Create router variable to direct routes
const router = express.Router()

router.post('/', registerUser)
router.post('/login', loginUser)