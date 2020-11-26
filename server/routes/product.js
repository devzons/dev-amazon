const router = require('express').Router()
const Product = require('../models/Product')

const upload = require('../middlewares/upload-photo')

// POST request - create a new product
router.post('/products', upload.single('photo'), async (req, res) => {
  try {
    let product = new Product()
    product.title = req.body.title
    product.description = req.body.description
    product.photo = req.file.location
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
router.get('/products', async (req, res) => {
  try {
    let products = await Product.find()
    res.json({
      success: true,
      products: products,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
})

// GET Request - get a single product
router.get('/products/:id', async (req, res) => {
  try {
    let product = await Product.findOne({ _id: req.params.id })
    res.json({
      success: true,
      product: product,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
})

// PUT request - update a signle product

// DELETE request - delete a single product

module.exports = router
