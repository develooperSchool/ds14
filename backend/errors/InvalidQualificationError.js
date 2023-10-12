const GlobalErrorHandler = require("../errors/GlobalErrorHandler")
const{INVALID_QUALIFICATION}= require("../utils/app.constants")
const HttpStatusCode = require("../utils/HttpStatusCode")


class InvalidQualificationError extends GlobalErrorHandler{
    constructor(description, res){
      super(
        INVALID_QUALIFICATION,
        HttpStatusCode.BAD_REQUEST,
        description,
        new Date(Date.now()),
        res
      )
    }
  
  }
  module.exports = InvalidQualificationError
  
  
  
  
  
  
  