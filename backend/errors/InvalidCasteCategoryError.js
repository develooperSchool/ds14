const GlobalErrorHandler = require("../errors/GlobalErrorHandler")
const{INVALID_CASTE_CATEGORY}= require("../utils/app.constants")
const HttpStatusCode = require("../utils/HttpStatusCode")


class InvalidCasteCategoryError extends GlobalErrorHandler{
    constructor(description, res){
      super(
        INVALID_CASTE_CATEGORY,
        HttpStatusCode.BAD_REQUEST,
        description,
        new Date(Date.now()),
        res
      )
    }
  
  }
  module.exports = InvalidCasteCategoryError
  
  
  
  
  
  
  