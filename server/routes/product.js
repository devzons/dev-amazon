const router = require('express').Router()
const Product = require('../models/Product')

// POST request - create a new product
router.post('/products', async (req, res) => {
  try {
    let product = new Product()
    product.title = req.body.title
    product.description = req.body.description
    product.photo = req.body.photo
    product.price = req.body.price
    product.stockQuantity = req.body.stockQuantity

    await product.save()

    res.json({
      status: true,
      message: 'Product save successfully',
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
})

// GET Request - get all products

// GET Request - get a single product

// PUT request - update a signle product

// DELETE request - delete a single product
