const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const UserSchema=new Schema({
    name:{
        type:"String",
        required:true
    },
    email:{
        type:"String",
        required:true
    },
    password:{
        type:"String",
        required:true
    },
    avtar:{
        type:"String",
        // required:true
    },
    isAdmin:{
        type:"Boolean",
        // required:true
    },
   
    Address:{
        flat:{
            type:"String",
            // required:true
        },
        Street:{
            type:"String",
            // requird:true
        },
        landmark:{
            type:"String",
            // required:true
        },
        city:{
            type:"String",
            // required:true
        },
        State:{
            type:"String",
            // required:true
        },
        country:{
            type:"String",
            // required:true
        },
        pin:{
            type:"Number",
            // required:true
        },
        mobile:{
            type:"Number",
            // required:true
        },
    }


},{timestamps:true});
const User=mongoose.model("User",UserSchema);
module.exports=User