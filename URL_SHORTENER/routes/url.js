const express = require("express") ; //importing express ;

const router = express.Router() ; //importing router from express ; 

const validUrl = require("valid-url") ; //importing valid-url
const nanoid = require("nanoid") ; //importing nanoid
const config = require("config") ; //importing config

const Url = require("../models/Url") ; //importing Url model
const { base } = require("../models/Url") ; //importing Url model
const { reset } = require("nodemon") ; //importing nodemon


router.post("/shorten", async (req, res) => {
  const { longUrl } = req.body ; //extracting longUrl from req.body
  const baseUrl = config.get("baseUrl") ; //extracting baseUrl from config

  //validating longUrl

  if (!validUrl.isUri(baseUrl)) {
    return res.status(400).json("Invalid base url") ; //if baseUrl is invalid
  }


  const urlCode = nanoid.nanoid(8) ; //generating urlCode

  
  if (validUrl.isUri(longUrl)) {
    try {
      let url = await Url.findOne({ longUrl }) ; //checking if longUrl is already present in database
      if (url) {
        res.json(url) ; //if longUrl is already present in database
      } else {
        const shortUrl = baseUrl + "/" + urlCode ; //generating shortUrl

        url = new Url({
          longUrl,
          shortUrl,
          urlCode,
          date: new Date(),
        }) ; //creating new Url object
        await url.save() ; //saving new Url object in database
        res.json(url) ; //sending response
      }
    } catch (error) {
      console.log(error) ; //if error occurs
      reset.status(500).json("Server error") ; //sending server error
    }
  } else {
    res.status(401).json("Invalid Url") ; //if longUrl is invalid
  }
}) ; //end of post request

module.exports = router ; 
