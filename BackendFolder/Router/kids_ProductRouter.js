const express=require('express')
const router =express.Router()
const Product = require("../Models/Product")
const {request}=require('http')
const { body, validationResult } = require('express-validator')




// Rest Api for products creations
// @usage:user registration
// @fiels:name, 



router.post('/kids-products',[

    body('name').notEmpty().withMessage('name is required'),
    body('brand').notEmpty().withMessage("brand is required"),
    body('price').notEmpty().withMessage('price is required'),
    body('qty').notEmpty().withMessage('qty is required'),
    body('image').notEmpty().withMessage('image is required'),
    body('category').notEmpty().withMessage('category is required'),
    body('description').notEmpty().withMessage('description is required'),
    body('usage').notEmpty().withMessage('usage is required'),



], async( request,response)=>{
    const result = validationResult(request);
    if (!result.isEmpty()){
        return response.status(400).send({result:result.array()})
     }

try{



    let newProduct={

        name:request.body.name,
        brand:request.body.brand,
        price:request.body.price,
        qty:request.body.qty,
        image:request.body.image,
        category:request.body.category,
        description:request.body.description,
        usage:request.body.usage
   

    }
    console.log(newProduct)
    newProduct= new Product(newProduct)
    newProduct= await newProduct.save()
    response.status(201).json({msg:"Kid's-product is created", newProduct:newProduct})

}catch(error){
    console.log(error)
    response.status(500).json({result:[{msg:result.message}]})



}





})














module.exports=router