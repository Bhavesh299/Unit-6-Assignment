const express =  require("express");
const app = express();
app.use(express.json());
const productcontroller = require("./controllers/product.controller");
app.use("/product", productcontroller);
module.exports  = app

