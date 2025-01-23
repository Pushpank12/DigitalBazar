const mongoose= require('mongoose')
const KidsSchema=new mongoose.Schema({

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

const KidsProduct=mongoose.model('KidsProduct',KidsSchema)

module.exports=KidsProduct
