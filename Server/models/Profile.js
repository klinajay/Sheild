const mongoose=require("mongoose");


const profileSchema=new mongoose.Schema({
    address:{
        type:String,
    },
    closestContacts:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"ClosestContact"
        }
    ],
    menstrualCycle:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"menstrualCycle"
    }

})

module.exports=mongoose.model("Profile",profileSchema);