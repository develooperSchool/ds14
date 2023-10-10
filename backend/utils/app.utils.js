const isInvalidId = (input) => {
    return !/^[0-9]+$/.test(input) || parseInt(input) <= 0;
};

const isInvalidName = (input) => {
  return (
    !/^[a-zA-Z\s\-']{2,20}$/.test(input) ||
    input.trim().length == 0 ||
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
  return !/^(\+91|91)[789]\d{9}$/.test(input);
};


module.exports = {
  isInvalidId,
  isInvalidEmail,
  isInvalidPassword,
  isInvalidYear,
  isInValidContact,
  isInvalidGender,
  isInvalidName,
  isInvalidDate,
};
