
class Logger {

    log = (id, message) => {
      let response = `[Logger ID:${id}]. Logged message is: ${message}`
      console.log(response)
      return response
    }
  }
  
  module.exports = Logger
  