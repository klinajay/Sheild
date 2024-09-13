//initiate server
const express= require('express');
const app=express();
require("dotenv").config();

//activate the server on port
app.listen(process.env.PORT,(req,res)=>
{
    console.log("Server started at port 3000");
})

//route
app.get('/',(req,res)=>
{
    res.send("Server started successfully");
})