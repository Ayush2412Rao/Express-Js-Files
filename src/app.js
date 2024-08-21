const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("Hi");
});
app.listen(8000,"127.0.0.1",()=>{
    console.log("Listening to port 8000");
});