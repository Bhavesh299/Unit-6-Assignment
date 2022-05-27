const mongoose = require("mongoose") ; //importing mongoose 

const urlSchema = new mongoose.Schema ({ 
  urlCode : String,
  longUrl : String,
  shortUrl : String,
  date: { type: Date, default: Date.now },
}) ; //creating urlSchema

module.exports = mongoose.model("Url", urlSchema) ; //exporting urlSchema
