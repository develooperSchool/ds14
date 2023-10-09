const GlobalErrorHandler = require("./GlobalErrorHandler");
const { INVALID_NAME } = require("../utils/app.constants");
const HttpStatusCode = require("../utils/HttpStatusCode");

class InvalidNameError extends GlobalErrorHandler {
  constructor(description, res) {
    super(
      INVALID_NAME,
      HttpStatusCode.BAD_REQUEST,
      description,
      new Date(Date.now()),
      res
    );
  }
}

module.exports = InvalidNameError;
