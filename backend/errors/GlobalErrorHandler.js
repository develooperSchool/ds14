class GlobalErrorHandler extends Error {
  constructor(name, httpCode, description, timeStamp, res) {
    super(description);

    Error.captureStackTrace(this);
    this.handlerError(name, httpCode, description, timeStamp, res);
  }

  handlerError = (name, httpCode, description, timeStamp, res) => {
    res.send({ name, httpCode, description, timeStamp });
  };
}

module.exports = GlobalErrorHandler;
