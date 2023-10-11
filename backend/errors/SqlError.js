const GlobalErrorHandler = require("./GlobalErrorHandler");
const HttpStatusCode = require("../utils/HttpStatusCode");

class SqlError extends GlobalErrorHandler {
  constructor(description, res) {
    super(
      "SQL ERROR",
      HttpStatusCode.INTERNAL_SERVER_ERROR,
      description,
      new Date(Date.now()),
      res
    );
  }
}

module.exports = SqlError;
