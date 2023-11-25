const GlobalErrorHandler = require("../errors/GlobalErrorHandler")
const{INVALID_YEAR}= require("../utils/app.constants")
const HttpStatusCode = require("../utils/HttpStatusCode")


class InvalidYearError extends GlobalErrorHandler{
    constructor(description, res){
      super(
        INVALID_YEAR,
        HttpStatusCode.BAD_REQUEST,
        description,
        new Date(Date.now()),
        res
      )
    }
  
  }
  module.exports = InvalidYearError
  
  
  
  
  
  
  