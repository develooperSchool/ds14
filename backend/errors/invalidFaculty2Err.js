const constant= require("../utils/app.constants");
const GlobalErrorHandler = require("./GlobalErrorHandler");
const HttpStatusCode = require("../utils/HttpStatusCode");

class InvalidSubId extends GlobalErrorHandler {
  constructor(description, res) {
    super(
      constant.INVALID_SUBJECT_ID,
      HttpStatusCode.BAD_REQUEST,
      description,
      new Date(Date.now()),
      res
    );
  }
};


class InvalidFacId extends GlobalErrorHandler {
    constructor(description, res) {
      super(
        constant.INVALID_FACULTY_ID,
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
        constant.INVALID_USER_ID,
        HttpStatusCode.BAD_REQUEST,
        description,
        new Date(Date.now()),
        res
      );
    }
  };
  
  
module.exports={InvalidSubId,InvalidFacId,InvalidUserId}