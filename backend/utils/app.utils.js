// utility functions

const isInvalidId = (input) => {
  // should return true if the given id is invalid // 1234adsdf

  //  !/^[0-9]+$/.test(input) --> returns true if the input is non-numeric
  //  input <= 0              --> returns true if the input is less than 0 or equal to 0
  return !/^[0-9]+$/.test(input) || parseInt(input) <= 0;
};

// IsInvalidName ==> return true if the given name is invalid
// IsInvalidEmail ==>  return true if the given email is invalid
// IsInvalidContact
// IsInvalidDob
// IsInvalid....

module.exports = { isInvalidId };
