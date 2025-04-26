import express from "express"
import mongoose from "mongoose"
const PoliceSchema=new mongoose.Schema({
    
    stationName: {
        type: String,
        required: true,
    },
    officerInCharge: {
        type: String,
    },        
    city : {
        type:String,
        required:true,
    },
    state : {
        type : String,
        required : true
    },
    district : {
        type : String,
        required : true
    },
    location:
    {
        type:String,
        required:true,
    },
    contactNumber:{
        type:String,
        require:true
    },
    email : {
        type : String,
        required : true
    },
    complaints:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Complaint"
    }],
    pincode : {
        type : String
    }
},
{
    timestamps : true
})

const Police = mongoose.model("Police",PoliceSchema)
export  {Police}