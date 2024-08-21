const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send("<h3>Home-Page</h3>");
});
app.get("/about",(req,res)=>{
    res.send("<h3>About-Page</h3>");
});
app.get("/temp",(req,res)=>{
    res.send("<h1>This is the temperature</h1>")
})

app.listen(8000,"127.0.0.1",()=>{
    console.log("Running on port 8000");
});