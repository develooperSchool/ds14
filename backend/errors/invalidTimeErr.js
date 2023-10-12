const constant= require("../utils/app.constants");
const GlobalErrorHandler = require("./GlobalErrorHandler");
const HttpStatusCode = require("../utils/HttpStatusCode");

class InvalidId extends GlobalErrorHandler {
  constructor(description, res) {
    super(
      constant.INVALID_ID,
      HttpStatusCode.BAD_REQUEST,
      description,
      new Date(Date.now()),
      res
    );
  }
};


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

  
class InvalidTime extends GlobalErrorHandler {
    constructor(description, res) {
      super(
        constant.INVALID_TIME_FIELD,
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

  module.exports={InvalidFacId,InvalidId,InvalidTime,InvalidSubId}