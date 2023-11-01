const constant= require("../utils/app.constants");
const GlobalErrorHandler = require("./GlobalErrorHandler");
const HttpStatusCode = require("../utils/HttpStatusCode");


class InvalidSubjectId extends GlobalErrorHandler {
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

  
class InvalidSubject extends GlobalErrorHandler {
    constructor(description, res) {
      super(
        constant.INVALID_COURSE_NAME,
        HttpStatusCode.BAD_REQUEST,
        description,
        new Date(Date.now()),
        res
      );
    }
  };
  
  
class InvalidDuration extends GlobalErrorHandler {
    constructor(description, res) {
      super(
        constant.INVALID_DURATION_FIELD,
        HttpStatusCode.BAD_REQUEST,
        description,
        new Date(Date.now()),
        res
      );
    }
  };

  
class InvalidFacultyId extends GlobalErrorHandler {
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
  
  
class InvalidSyllabus extends GlobalErrorHandler {
    constructor(description, res) {
      super(
        constant.INVALID_SYLLABUS_LINK,
        HttpStatusCode.BAD_REQUEST,
        description,
        new Date(Date.now()),
        res
      );
    }
  };
  
  
  module.exports={InvalidDuration,InvalidFacultyId,InvalidSubjectId,InvalidSubject,InvalidSyllabus}
  
  
  
  