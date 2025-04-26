const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
    },
    lastName:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    },
    aadharNumber:{
        type:Number,
        required:true
    },
    contactNumber:{
        type:Number,
        required:true,
    },
    token:{
        type:String
    },
    gender:{
        type:String,
        enum:["Female"]
    },
    additionalDetails:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Profile",
    }
},
{
    timestamps : true
})

module.exports=mongoose.model("User",userSchema);