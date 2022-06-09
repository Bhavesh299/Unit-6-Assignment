const express=require("express")
const start=require("./puppet")
var cors = require('cors')
var app = express()
 
app.use(cors())
 
app.use(express.json())


app.post("/getjobs",async(req,res)=>{
      try {
          var data=await start()
          res.send(data)
      } 
      catch (error) {
          res.send(error)
      }
})

app.listen(1200,async()=>{
    try {
        console.log("listening on the port 1200")
    } 
    catch (error) {
        console.log(error) 
    }
})
