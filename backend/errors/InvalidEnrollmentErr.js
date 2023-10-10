const constant= require("../utils/enrollment.Constants");
const GlobalErrorHandler = require("./GlobalErrorHandler");
const HttpStatusCode = require("../utils/HttpStatusCode");

class InvalidUniqueId extends GlobalErrorHandler {
    constructor(description, res) {
      super(
        constant.UNIQUE_ID,
        HttpStatusCode.BAD_REQUEST,
        description,
        new Date(Date.now()),
        res
      );
    }
  };

  
class InvalidUserId extends GlobalErrorHandler {
    constructor(description, res) {
      super(
        constant.USER_ID,
        HttpStatusCode.BAD_REQUEST,
        description,
        new Date(Date.now()),
        res
      );
    }
  };
  

  
class InvalidCourseId extends GlobalErrorHandler {
    constructor(description, res) {
      super(
        constant.COURSE_ID,
        HttpStatusCode.BAD_REQUEST,
        description,
        new Date(Date.now()),
        res
      );
    }
  };

  module.exports={InvalidUniqueId,InvalidCourseId,InvalidUserId}