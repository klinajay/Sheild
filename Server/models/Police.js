const express=require("express");
const mongoose=require("mongoose");
const PoliceSchema=new mongoose.Schema({
    registrationNo:{
        type:String,
        required:true
    },
    Location:
    {
        type:String,
        required:true,
    },
    contactNumber:{
        type:String,
        require:true
    },
    Complaint:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Complaint"
    }]
})

module.exports=mongoose.model("Police",PoliceSchema);