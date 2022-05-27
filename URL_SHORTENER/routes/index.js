const express = require("express") //importing express ;            
const router = express.Router() //importing router from express ;

const Url = require("../models/Url") ;

router.get("/:code", async (req, res) => {
  try {
    const url = await Url.findOne({ urlCode: req.params.code }) ;
    if (url) {
      return res.redirect(url.longUrl) ;
    } else {
      return res.status(404).json("URL NOT FOUND") ;
    }
  } catch (error) {
    console.log(error) ;
    res.status(500).json("Server Error Occurred") ;
  }
});

module.exports = router ;
