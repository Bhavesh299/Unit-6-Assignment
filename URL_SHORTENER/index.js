const express = require("express") ; //importing express ;
const connect = require("./config/db") ; //importing connect from config/db

const app = express() ; //creating app


connect() ; //connecting to database

app.use(express.json({ extended: false })) ; //using json


app.use("/", require("./routes/index")) ; //using index route
app.use("/api/url", require("./routes/url")) ; //using url route

app.listen(4002, () => {
  console.log("Listening on port 4002") ; 
}); 
