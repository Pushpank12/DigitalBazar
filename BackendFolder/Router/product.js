const express=require('express');
const router=express.Router();
const Product=require("../Models/Product");
const { body, validationResult } = require("express-validator");
router.post("/product",[
    body("name").notEmpty().withMessage('name field is required'),
    body('brand').notEmpty().withMessage('brand field is required'),
    body('price').notEmpty().withMessage('price field is not empty'),
    body('qty').notEmpty().withMessage('quantity field is not empty'),
    body('image').notEmpty().withMessage('image field is required'),
    body('category').notEmpty().withMessage('category field is required'),
    body('description').notEmpty().withMessage('description field is requird'),
    body('usage').notEmpty().withMessage('usage field is required')
],
async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name,brand, price,qty,image,category,description,usage } = req.body;

    try {
      // Create a new product
      const newProduct = new Product({
        name,
        brand,
        price,
        qty,
        image,
        category,
        description,
        usage
      });

      await newProduct.save();
      res.status(201).json({ message: "new product created successfully", newProduct });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
);
//find the data by a category data in the product
router.get("/product/category/:category", async (req, res) => {
    const { category } = req.params;
  
    try {
      const products = await Product.find({ category });
  
      if (products.length === 0) {
        return res.status(404).json({ msg: `No products found in the '${category}' category` });
      }
  
      res.status(200).json({ msg: `Products retrieved successfully for category: ${category}`, data: products });
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: "Internal server error" });
    }
  });
  // Update a product by ID
router.put("/product/:id", async (req, res) => {
    const { id } = req.params;
    const { name, brand, price, qty, image, category, description, usage } = req.body;
  
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        id,
        { name, brand, price, qty, image, category, description, usage },
        { new: true, runValidators: true } // Return updated document and validate input
      );
  
      if (!updatedProduct) {
        return res.status(404).json({ msg: `No product found with ID: ${id}` });
      }
  
      res.status(200).json({ msg: "Product updated successfully", data: updatedProduct });
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: "Internal server error" });
    }
  });
  //delete product
  router.delete("/product/:id", async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedProduct = await Product.findByIdAndDelete(id);
  
      if (!deletedProduct) {
        return res.status(404).json({ msg: `No product found with ID: ${id}` });
      }
  
      res.status(200).json({ msg: "Product deleted successfully", data: deletedProduct });
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: "Internal server error" });
    }
  });
  
module.exports=router