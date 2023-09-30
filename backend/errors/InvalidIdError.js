const { INVALID_ID } = require("../utils/revenue.contants");
const GlobalErrorHandler = require("./GlobalErrorHandler");
const HttpStatusCode = require("../utils/HttpStatusCode");

class InvalidId extends GlobalErrorHandler {
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

module.exports = InvalidId;
