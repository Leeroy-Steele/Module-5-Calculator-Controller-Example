const express = require('express')
const app = express()
const port = 3000   // 1024 -> 65535 are good port numbers for dev  
const testRoute = require('./routes/myTestRoute')
const calculatorRoute = require('./routes/calculatorRoute')

// create a route to a static html page
app.use('/', express.static('public'))
app.use(express.json())

// create a route
app.use('/my-test-route', testRoute)
app.use('/calculator', calculatorRoute)

// start the server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})