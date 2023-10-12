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
const invalidName = (input) => {
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
 return !/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}$/.test(input);
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
  IsInvalidNameNum,
  isInvalidDate,
  invalidName,
};

// 1. camelCase --> variableName, functionName, etc    getStudentByEmail
// 2. PascleCase --> React, ClassName, ComponentName.. ArrayIndexOutOfBoundsException
// 3. snake_case --> python_language, database_level, database_name, table_name, column_name
//                   revenue_category_table, revenue_category_id