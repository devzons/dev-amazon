const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const app = express()

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('Connected to the database')
  }
})

// middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// GET - retrieve data from the server
app.get('/', (req, res) => {
  res.json('Hello amazon')
})

// POST - send data from frontend to backend
app.post('/', (req, res) => {
  console.log(req.body.name)
})

app.listen(3000, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('Port 3000...')
  }
})
