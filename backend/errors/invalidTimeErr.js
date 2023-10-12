const constant= require("../utils/app.constants");
const GlobalErrorHandler = require("./GlobalErrorHandler");
const HttpStatusCode = require("../utils/HttpStatusCode");

class InvalidId extends GlobalErrorHandler {
  constructor(description, res) {
    super(
      constant.id5,
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
        constant.sub_id5,
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
        constant.time5,
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
        constant.faculty_id5,
        HttpStatusCode.BAD_REQUEST,
        description,
        new Date(Date.now()),
        res
      );
    }
  };

  module.exports={InvalidFacId,InvalidId,InvalidTime,InvalidSubId}