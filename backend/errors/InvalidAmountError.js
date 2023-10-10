const GlobalErrorHandler = require("./GlobalErrorHandler");
const { INVALID_AMOUNT } = require("../utils/app.constants");
const HttpStatusCode = require("../utils/HttpStatusCode");

class InvalidAmountError extends GlobalErrorHandler {
  constructor(description, res) {
    super(
      INVALID_AMOUNT,
      HttpStatusCode.BAD_REQUEST,
      description,
      new Date(Date.now()),
      res
    );
  }
}
module.exports = InvalidAmountError;
