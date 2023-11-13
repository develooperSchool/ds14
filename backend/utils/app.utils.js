const isInvalidId = (input) => {
  return !/^[0-9]+$/.test(input) || parseInt(input) <= 0;
};

const isInvalidName = (input) => {
  return (
    !/^[a-zA-Z\s\ -']{2,30}$/.test(input) ||
    input.trim().length == 0 ||
    /(.)\1\1+/.test(input)
  );
};

const IsInvalidN = (input) => {
  return (
    !/^[a-zA-Z\s\ -']{2,30}$/.test(input) ||
    input.trim().length == 0 ||
    /(.)\1\1+/.test(input)
  );
};

const IsInvalidNameNum = (input) => {
  return (
    !/^[a-zA-Z0-9\s\-']{2,20}$/.test(input) ||
    input.length == 0 ||
    /(.)\1\1+/.test(input)
  );
};

const isInvalidEmail = (input) => {
  return !/^[A-Za-z0-9._%+-]+@[A-Za-z.-]+[A-Za-z]{2,}$/.test(input);
};

const isInvalidDate = (input) => {
  return !/^((?:0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(?:19\d{2}|20[0-2]\d|20[23]\d))$/.test(
    input
  );
};

const isInvalidPassword = (input) => {
  return !/^(?=.*[A-Za-z])(?=.*\d)[a-zA-Z\d]{8,20}$/.test(input);
};

const isInvalidYear = (input) => {
  return !/^(20\d{2})$/.test(input);
};

const isInvalidGender = (input) => {
  return !/^(male|female)$/.test(input);
};

const isInValidContact = (input) => {
  // return !/^(\+91|91)[789]\d{9}$/.test(input);
  return !/^[789]\d{9}$/.test(input);
};

const respond = (message, statusCode, description, timeStamp, res) => {
  const fieldName = typeof description === "string" ? "description" : "body";
  const response = {
    message,
    statusCode,
    [fieldName]: description,
    timeStamp,
  };
  res.status(statusCode).send(response);
};

module.exports = {
  isInvalidId,
  isInvalidEmail,
  isInvalidPassword,
  isInvalidYear,
  isInValidContact,
  isInvalidGender,
  isInvalidName,
  IsInvalidNameNum,
  isInvalidName,
  isInvalidDate,
  IsInvalidN,
};
