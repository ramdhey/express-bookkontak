const express = require("express");
const app = express();
let port = process.env.PORT || 3000;
const importData = require("./datanya.json")
const cors = require("cors");
app.use(cors());

app.get("/",(req,res)=>{
    res.send("GALAT 404")
})

app.get("/datanya",(req,res) => {
    res.send(importData)

})


app.listen(port,()=>{

})