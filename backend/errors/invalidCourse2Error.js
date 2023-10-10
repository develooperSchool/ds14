const constant= require("../utils/course2.Constants");
const GlobalErrorHandler = require("./GlobalErrorHandler");
const HttpStatusCode = require("../utils/HttpStatusCode");

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


class InvalidCourseName extends GlobalErrorHandler {
    constructor(description, res) {
      super(
         constant.COURSE_NAME,

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
        constant.COURSE_DURATION,
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
        constant.COURSE_FEES,
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

  module.exports={InvalidCourseId,InvalidCourseDuration,InvalidCourseFees,InvalidCourseName,sqlErr}