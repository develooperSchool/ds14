class GlobalErrorHandler extends Error {
  constructor(message, statusCode, description, timeStamp, res) {
    super(description);

    Error.captureStackTrace(this);
    this.handleError(message, statusCode, description, timeStamp, res);
  }

  handleError = (message, statusCode, description, timeStamp, res) => {
    res.send({ message, statusCode, description, timeStamp });
  };
}

module.exports = GlobalErrorHandler;
