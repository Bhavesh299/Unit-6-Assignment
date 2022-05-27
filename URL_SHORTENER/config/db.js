const mongoose = require("mongoose") ; //importing mongoose
const config = require("config") ; //importing config

const db = config.get("mongoURI") ; //extracting db from config 

const connect = async () => { 
  try {
    await mongoose.connect(db) ; 
    console.log("Connected to Database...") ; 
  } catch (error) {
    console.log(error.message) ; 
  }
} ; //connecting to database

module.exports = connect ; 
