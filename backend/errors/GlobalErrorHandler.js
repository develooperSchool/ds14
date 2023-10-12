<<<<<<< HEAD

class GlobalErrorHandler extends Error {
  constructor(message, httpCode, description, timeStamp, res) {
    super(description);

    Error.captureStackTrace(this);
    this.handlerError(message, httpCode, description, timeStamp, res);
  }

  handlerError = (message, httpCode, description, timeStamp, res) => {
    res.status(httpCode).send({ message, httpCode, description, timeStamp });
=======
const HttpStatusCode = require("../utils/HttpStatusCode");

class GlobalErrorHandler extends Error {
  constructor(message, statusCode, description, timeStamp, res) {
    super(description);

    // Error.captureStackTrace(this);
    this.handleError(message, statusCode, description, timeStamp, res);
  }

  handleError = (message, statusCode, description, timeStamp, res) => {
    res
      .status(statusCode)
      .send({ message, statusCode, description, timeStamp });
>>>>>>> 885994ed6c619b0fec8d519751a3ede50b0313a6
  };
}

module.exports = GlobalErrorHandler;
