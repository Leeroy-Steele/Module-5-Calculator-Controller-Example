// page 41 - module 5

const addNumbers = (req, res) => {

    // grab values from front end query parameters
    let number1=parseInt(req.query.number1);
    let number2=parseInt(req.query.number2);
    let sum=number1+number2

    // respond (res) to client 
    res.status(200) // 200 means ok
    res.json({result:sum})
}

// export the function for the router to access
module.exports = {
    addNumbers
}