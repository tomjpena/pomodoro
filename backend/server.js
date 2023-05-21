require('dotenv').config()
const express = require('express')
const cookieParser = require('cookie-parser')
const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/errorMiddleware')

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

// Routes
app.use('/api/users', require('./routes/userRoutes'))

app.use('/api/data', require('./routes/dataRoutes'))


// Error handling middleware
app.use(errorHandler)

// Starting Server
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
})

// Handling Error
process.on("unhandledRejection", err => {
  console.log(`An error occurred: ${err.message}`)
  server.close(() => process.exit(1))
})