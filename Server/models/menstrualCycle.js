const mongoose=require("mongoose");

const menstrualCycleSchema=new mongoose.Schema({
    periodDate:{
        type:Date,
        required:true
    },
    previousDates:[{
        type:Map
    }],
    ReminderDate:{
        type:Date
    },
    status:{
        type:Boolean
    }
},
{
    timestamps : true
})

module.exports=mongoose.model("menstrualCycle",menstrualCycleSchema);