const constant= require("../utils/app.constants");
const GlobalErrorHandler = require("./GlobalErrorHandler");
const HttpStatusCode = require("../utils/HttpStatusCode");

class InvalidCourseId extends GlobalErrorHandler {
  constructor(description, res) {
    super(
      constant.INVALID_COURSE_ID,
      HttpStatusCode.BAD_REQUEST,
      description,
      new Date(Date.now()),
      res
    );
  }
};


class InvalidCourseName extends GlobalErrorHandler {
    constructor(description, res) {
      super(
         constant.INVALID_COURSE_NAME,

        HttpStatusCode.BAD_REQUEST,
        description,
        new Date(Date.now()),
        res
      );
    }
  }

  
class InvalidCourseDuration extends GlobalErrorHandler {
    constructor(description, res) {
      super(
        constant.INVALID_COURSE_DURATION,
        HttpStatusCode.BAD_REQUEST,
        description,
        new Date(Date.now()),
        res
      );
    }
  }

  
class InvalidCourseFees extends GlobalErrorHandler {
    constructor(description, res) {
      super(
        constant.INVALID_COURSE_FEES,
        HttpStatusCode.BAD_REQUEST,
        description,
        new Date(Date.now()),
        res
      );
    }
  }


  
class sqlErr extends GlobalErrorHandler {
    constructor(description, res) {
      super(
        "SQL ERROR",
        HttpStatusCode.INTERNAL_SERVER_ERROR,
        description,
        new Date(Date.now()),
        res
      );
    }
  }

  
  
class serverErr extends GlobalErrorHandler {
  constructor(description, res) {
    super(
      "SERVEICE ERROR",
      HttpStatusCode.INTERNAL_SERVER_ERROR,
      description,
      new Date(Date.now()),
      res
    );
  }
}

  module.exports={InvalidCourseId,InvalidCourseDuration,InvalidCourseFees,InvalidCourseName,sqlErr,serverErr}