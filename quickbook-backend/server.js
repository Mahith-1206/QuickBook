const express = require("express");
const app = express();
const PORT = 8090;
const cors = require("cors");
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
const userRoute = require("./routes/userRoute");

app.use(cors());
app.use(express.json());
app.use("/",userRoute);

app.listen(PORT, (req,res)=>{
    console.log(`Connection established at ${PORT}`);
})