const Mongoose = require("mongoose")

//Connect to DB.
//@@todo replact connect() with mongoURI as environment variable
const connectDB = async () => {
  try {
    await Mongoose.connect(process.env.MONGO_URI)
    console.log("MongoDB Connected")   
  } catch (error) {
    console.log('Error. MongoDB not connected');
  }
}

module.exports = connectDB