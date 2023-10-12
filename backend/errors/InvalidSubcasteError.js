const GlobalErrorHandler = require("../errors/GlobalErrorHandler")
const{INVALID_CASTE_CATEGORY, INVALID_SUBCASTE}= require("../utils/app.constants")
const HttpStatusCode = require("../utils/HttpStatusCode")


class InvalidSubcasteError extends GlobalErrorHandler{
    constructor(description, res){
      super(
        INVALID_SUBCASTE,
        HttpStatusCode.BAD_REQUEST,
        description,
        new Date(Date.now()),
        res
      )
    }
  
  }
  module.exports = InvalidSubcasteError
  
  
  
  
  
  
  