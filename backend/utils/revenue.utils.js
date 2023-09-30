const isNullOrUndefined = (input) => {
  return input === null || input === undefined || input === "";
};

const isInvalidId = (input) => {
  return !/^[0-9]+$/.test(input) || parseInt(input) <= 0;
};

const isInvalidAmount = (amount) => {
  return parseInt(amount) <= 0;
};

const respond = (status, message, res, next) => {
  if (status !== 0 || message !== "") {
    res.status(status).send(message);
  } else next();
};

module.exports = { isNullOrUndefined, isInvalidId, isInvalidAmount, respond };
