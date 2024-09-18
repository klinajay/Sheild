const express=require("express");
const mongoose=require("mongoose");

const PostSchema=new mongoose.Schema({
    postName:{
        type:String,
        required:true,
    },
    postContent:
    {
        type:String,
        required:true,
    },
    postDecription:
    {
        type:String
    },
    createdAt:
    {
        type:Date,
        default:Date.now(),
    }
})


module.exports=mongoose.model("Post",PostSchema);