require('dotenv').config()
const express = require('express')
const cookieParser = require('cookie-parser')
const connectDB = require('./config/db')

//Connect to DB
connectDB()

// Declare and initialize variables for server
// @@ todo: setup PORT in env variables and use ||
const PORT = 5000
const app = express()

// Body parser middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Cookie parser middleware
app.use(cookieParser())

// Starting Server
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
})

// Handling Error
process.on("unhandledRejection", err => {
  console.log(`An error occurred: ${err.message}`)
  server.close(() => process.exit(1))
})