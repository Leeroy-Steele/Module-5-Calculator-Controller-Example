var express = require('express')

var router = express.Router()

var calculatorController = require('../controllers/calculatorController')

router.get('/add', calculatorController.addNumbers)

module.exports = router