const mongoose =require("mongoose")
const RegisterSchema=new  mongoose.Schema({

  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{

    type:String,
    required:true
  },
  confirmpassword:{

    type:String,
    required:true
  }


},{timestamps:true})

const Register=mongoose.model('Register',RegisterSchema)

module.exports=Register