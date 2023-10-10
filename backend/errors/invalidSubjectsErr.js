const constant= require("../utils/subjects.Constants");
const GlobalErrorHandler = require("./GlobalErrorHandler");
const HttpStatusCode = require("../utils/HttpStatusCode");


class InvalidSubjectId extends GlobalErrorHandler {
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

  
class Invalidsubject extends GlobalErrorHandler {
    constructor(description, res) {
      super(
        constant.subject,
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
        constant.duration,
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
        constant.faculty_id,
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
        constant.syllabus,
        HttpStatusCode.BAD_REQUEST,
        description,
        new Date(Date.now()),
        res
      );
    }
  };
  
  
  module.exports={InvalidDuration,InvalidFacultyId,InvalidSubjectId,Invalidsubject,InvalidSyllabus}
  
  
  
  