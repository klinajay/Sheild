const mongoose=require("mongoose");

const ClosestContactSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true,
    },
    contactNumber:{
        type:String,
        required:true,
    }

},
{
    timestamps : true
})


module.exports=mongoose.model("ClosestContact",ClosestContactSchema);