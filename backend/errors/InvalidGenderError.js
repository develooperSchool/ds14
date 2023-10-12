const GlobalErrorHandler = require("./GlobalErrorHandler");
const {INVALID_GENDER} = require("../utils/app.constants");
const HttpStatusCode = require("../utils/HttpStatusCode");

class InvalidGenderError extends GlobalErrorHandler {
    constructor(description, res) {
      super(
        INVALID_GENDER,
        HttpStatusCode.BAD_REQUEST,
        description,
        new Date(Date.now()),
        res
      );
    }
  }

  module.exports = InvalidGenderError