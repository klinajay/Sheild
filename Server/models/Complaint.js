import mongoose from "mongoose";
const complaintSchema=new mongoose.Schema({
    location : {
        type : String,
        required : true
    },
    Title: {
        type: String,
        required: true
    },
    Reason:{
        type:String,
        required:true,
    },
    Proof:{
        type:String   //string means link of any image or video or audio
    },
    Date:{
        type:Date,
    },
    status:{
        type:String,
        enum: ['unread', 'read', 'processed'],
        default:"unread",
    },
    victimId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    policeStationId : {
        type : mongoose.Schema.Types.ObjectId,
        ref:"Police"
    }
},
{
    timestamps : true
})

const Complaint=mongoose.model("Complaint",complaintSchema);
export {Complaint}
