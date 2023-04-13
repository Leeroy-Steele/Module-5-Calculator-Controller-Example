// page 51 - 53 - module 5

const Calculator = require('../libraries/calculator');

let myCalc=new Calculator()

const addNumbers = (req, res) => {
    let number1=parseInt(req.query.number1);
    let number2=parseInt(req.query.number2);
    let sum = myCalc.add(number1,number2)
    res.status(200)
    res.json({result:sum})
}

const subtractNumbers = (req, res) => {
    let number1=parseInt(req.query.number1);
    let number2=parseInt(req.query.number2);
    let sum = myCalc.subtract(number1,number2)
    res.status(200)
    res.json({result:sum})
}

// export the function for the router to access
module.exports = {
    addNumbers,
    subtractNumbers
}