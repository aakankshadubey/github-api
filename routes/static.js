const express = require('express')
const route = express.Router()
const path = require('path')

const filePath = path.join(__dirname, "../public")

route.use('/', express.static(filePath))

exports = module.exports = route 
