const mongoose= require('mongoose')
const MensSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    brand:{
        type:String,
        required:true
    },

    image:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    info:{
        type:String,
        required:true
    }



},{timestamps:true})

const MensProduct=mongoose.model('MensProduct',MensSchema)

module.exports=MensProduct
