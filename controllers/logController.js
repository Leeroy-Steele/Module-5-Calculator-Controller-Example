
// page 55 - part 3 - module 5

const Logger = require('../libraries/logger');

let myLogger=new Logger()

const logMessage = (req, res) => {
    let id=parseInt(req.query.id)
    let message=req.query.message

    let response = myLogger.log(id,message)
    
    res.status(200)
    res.json({result:response})
}

// export the function for the router to access
module.exports = {
    logMessage
}