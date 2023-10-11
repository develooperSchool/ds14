const GlobalErrorHandler = require("./GlobalErrorHandler");
const { INVALID_DATE } = require("../utils/app.constants");
const HttpStatusCode = require("../utils/HttpStatusCode");

class InvalidDateError extends GlobalErrorHandler {
  constructor(description, res) {
    super(
      INVALID_DATE,
      HttpStatusCode.BAD_REQUEST,
      description,
      new Date(Date.now()),
      res
    );
  }
}

module.exports = InvalidDateError;
