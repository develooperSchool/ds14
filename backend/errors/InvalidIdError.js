const { INVALID_USER_ID } = require("../utils/app.constants");
const GlobalErrorHandler = require("./GlobalErrorHandler");
const HttpStatusCode = require("../utils/HttpStatusCode");

class InvalidId extends GlobalErrorHandler {
  constructor(description, res) {
    super(
      INVALID_USER_ID,
      HttpStatusCode.BAD_REQUEST,
      description,
      new Date(Date.now()),
      res
    );
  }
}

module.exports = InvalidId;
