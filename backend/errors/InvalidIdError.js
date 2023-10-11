const GlobalErrorHandler = require("./GlobalErrorHandler");
const { INVALID_ID } = require("../utils/app.constants");
const HttpStatusCode = require("../utils/HttpStatusCode");

class InvalidIdError extends GlobalErrorHandler {
  constructor(description, res) {
    super(
      INVALID_ID,
      HttpStatusCode.BAD_REQUEST,
      description,
      new Date(Date.now()),
      res
    );
  }
}

module.exports = InvalidIdError;
