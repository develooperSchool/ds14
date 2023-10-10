
class GlobalErrorHandler extends Error {
  constructor(message, httpCode, description, timeStamp, res) {
    super(description);

    Error.captureStackTrace(this);
    this.handlerError(message, httpCode, description, timeStamp, res);
  }

  handlerError = (message, httpCode, description, timeStamp, res) => {
    res.status(httpCode).send({ message, httpCode, description, timeStamp });
  };
}

module.exports = GlobalErrorHandler;
