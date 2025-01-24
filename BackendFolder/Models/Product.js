const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const ProductSchema=new Schema({
    name:{
        type:"String",
        required:true
    },
    brand:{
        type:"String",
        required:true
    },
    price:{
        type:"Number",
        required:true
    },
    qty:{
        type:"Number",
        required:true
    },
    image:{
        type:"String",
        required:true
    },
    category:{
        type:"String",
        required:true
    },
    description:{
       type:"String",
       required:true 
    },
    usage:{
        type:"String",
        required:true
    },
    // created:{
    //     type:"Date",
    //     required:true
    // }
},{timestamps:true});
const Product=mongoose.model("Product",ProductSchema);
module.exports=Product