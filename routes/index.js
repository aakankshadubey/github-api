const route  = require('express').Router()
const path = require('path')
const express = require('express')

route.use('/', require("./static"))
route.use('/sendUsername', require("./getList"))


exports = module.exports = route
