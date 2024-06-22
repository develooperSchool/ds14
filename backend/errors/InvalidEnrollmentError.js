const constant = require("../utils/app.constants");
const GlobalErrorHandler = require("./GlobalErrorHandler");
const HttpStatusCode = require("../utils/HttpStatusCode");

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
}

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
}

module.exports = { InvalidCourseId, InvalidUserId };
