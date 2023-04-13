var express = require('express')

var router = express.Router()

var calculatorController = require('../controllers/calculatorController')
var logController = require('../controllers/logController')

// define routes to the correct controller here
router.get('/add', calculatorController.addNumbers)
router.get('/subtract', calculatorController.subtractNumbers)
router.get('/log', logController.logMessage)

module.exports = router