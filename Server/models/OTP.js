const express=require("express");
const mongoose=require("mongoose");
const OTPSchema=new mongoose.Schema({
    otp:{
        type:String,
        required:true
    },
    contactNumber:{
        type:String,
        require:true
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        expires:5*60,
    }
})

module.exports=mongoose.model("OTP",OTPSchema);