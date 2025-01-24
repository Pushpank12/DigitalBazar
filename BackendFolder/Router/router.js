const express=require('express')
const router =express.Router()
const User= require('../Models/User')
const {request}=require('http')
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator')




// Rest API
// -------------
//1) @usage: Get all registrated users 
//  @fields :no fileds 
//  @method: get  
//  @accss:Public
//  @url:http://127.0.0.1:5000/api/users/registration/all-user

router.get('/registration/all-user', async (request, response) => {
    try {
        let user = await User.find();
        response.status(200).json({ user: user })
    }
    catch (error) {
        console.log(error)
        response.status(500).json({ result: [{ msg: result.message }] })

    }
})



// Rest API
//2) @usage: user registration 
//  @fields :name, email, password, address,mobile 
//  @method: Post
//  @accss:Public

router.post('/registration',[
    body('name').notEmpty().withMessage("name is required"),
    body('email').notEmpty().withMessage("email is required"),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    // body('avtar').notEmpty().withMessage("avtar is required"),
    // body('isAdmin').notEmpty().withMessage("isAdmin is required"),
    // body('Address.flat').notEmpty().withMessage('flat is required'),
    // body('Address.Street').notEmpty().withMessage('street is required'),
    // body('Address.landmark').notEmpty().withMessage('street is required'),
    // body('Address.city').notEmpty().withMessage('city is required'),
    // body('Address.State').notEmpty().withMessage('State is required'),
    // body('Address.country').notEmpty().withMessage('Country is required'),
    // body('Address.pin').isNumeric().withMessage('pin code must be number').withMessage('pin code is required'),
    // body('Address.mobile').isNumeric().withMessage("mobile mumber must be  a number").withMessage("mobile number is required")

 ],async (request, response)=>{
    const result = validationResult(request);
    if (!result.isEmpty()){
        return response.status(400).send({result:result.array()})
    }

    const { name, email, password, Address } = request.body;

    try{

      
       
        
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return response.status(400).json({ message: "User already exists with this email." });
        }
        


    
         // Hashing the password
         const salt = await bcrypt.genSalt(10);
         const hashedPassword = await bcrypt.hash(password, salt);

    //    create a new user
       
         let newUser={

            name: request.body.name,
            email: request.body.email,
            password:hashedPassword,
            // avtar: request.body.avtar,
            // isAdmin: request.body.isAdmin || false, 
            // Address: {
            //     flat: request.body.Address.flat,
            //     Street: request.body.Address.Street,
            //     landmark: request.body.Address.landmark,
            //     city: request.body.Address.city,
            //     State: request.body.Address.State,
            //     country: request.body.Address.country,
            //     pin: request.body.Address.pin,
            //     mobile: request.body.Address.mobile,
            // },
      
          
          



        }
        // console.log(newUser)

        newUser = new User(newUser)
        newUser= await newUser.save()
        console.log(newUser)
        response.status(201).json({msg: 'user is registrated', newUser:newUser})
    }
    catch(error){

        console.log(error)
        response.status(500).json({result:[{msg:result.message}]})

    }



})







module.exports=router