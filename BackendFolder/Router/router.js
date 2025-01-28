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

const express = require("express");
const router = express.Router();
const User = require("../Models/User"); // Correct relative path
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const jwtAuthMiddleware = require('../Middleware/middle')
//checking purpose

router.get('/protected-route', jwtAuthMiddleware, (req, res) => {
  res.status(200).json({ message: 'Access granted', user: req.user });
});
// User registration route
router.post(
  "/registration",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").notEmpty().withMessage("Email is required"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
    body("avtar").notEmpty().withMessage("Avatar is required"),
    body("isAdmin").notEmpty().withMessage("isAdmin is required"),
    body("Address.flat").notEmpty().withMessage("Flat is required"),
    body("Address.Street").notEmpty().withMessage("Street is required"),
    body("Address.landmark").notEmpty().withMessage("Landmark is required"),
    body("Address.city").notEmpty().withMessage("City is required"),
    body("Address.State").notEmpty().withMessage("State is required"),
    body("Address.country").notEmpty().withMessage("Country is required"),
    body("Address.pin")
      .isNumeric()
      .withMessage("Pin code must be numeric")
      .withMessage("Pin code is required"),
    body("Address.mobile")
      .isNumeric()
      .withMessage("Mobile number must be numeric")
      .withMessage("Mobile number is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });

    }

    const { name, email, password, Address, avtar, isAdmin } = req.body;

    try {
      // Check if the user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res
          .status(400)
          .json({ message: "User already exists with this email." });
      }

      // Hashing the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Create a new user
      const newUser = new User({
        name,
        email,
        password: hashedPassword,
        avtar,
        isAdmin: isAdmin || false,
        Address,
      });

      await newUser.save();
      res.status(201).json({ message: "User registered successfully", newUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
);

//user login Api
router.post('/login', (req, res, next) => {
  User.find({ name: req.body.name })
    .exec()
    .then(User => {
      if (User.length < 1) {
        return res.status(401).json({
          msg: 'user not exist'
        })
      }
      bcrypt.compare(req.body.password, User[0].password, (err, result) => {
        if (!result) {
          return res.status(401).json(
            {
              msg: 'password matching fail'
            })
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



        if (result) {
          const token = jwt.sign(
            {
              name: User[0].name,
              password: User[0].password,
            },
            process.env.JWT_SECRET, // Use environment variable for the secret key
            { expiresIn: "1h" }
          );
          res.status(200).json({
            name: User[0].name,
            email: User[0].email,
            mobile: User[0].Address.mobile,
            pin: User[0].Address.pin,
            token: token
          })
        }
      })
    })
    .catch(err => {
      res.status(500).json({
        err: err
      })
    })

})

module.exports = router;