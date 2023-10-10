const constant= require("../utils/faculty2.constants");
const GlobalErrorHandler = require("./GlobalErrorHandler");
const HttpStatusCode = require("../utils/HttpStatusCode");

class InvalidSubId extends GlobalErrorHandler {
  constructor(description, res) {
    super(
      constant.sub_id,
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
        constant.faculty_id,
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
        constant.user_id,
        HttpStatusCode.BAD_REQUEST,
        description,
        new Date(Date.now()),
        res
      );
    }
  };
  
  
module.exports={InvalidSubId,InvalidFacId,InvalidUserId}