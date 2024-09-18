const express=require("express");
const mongoose=require("mongoose");

const NotificationSchema=new mongoose.Schema({
    NotificationName:{
        type:String,
        required:true,
    },
    NotificationContent:
    {
        type:String,
        required:true,
    },
    NotificationDecription:
    {
        type:String
    },
    createdAt:
    {
        type:Date,
        default:Date.now(),
    },
    ExpireAt:
    {
        type:String,
    }
})


module.exports=mongoose.model("Notification",NotificationSchema);