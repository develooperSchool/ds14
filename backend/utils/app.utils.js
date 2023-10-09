const isInvalidId = (input) => {
  return !/^[0-9]+$/.test(input) || parseInt(input) <= 0;
};

const IsInvalidName = (input) => {
  return (
    !/^[a-zA-Z\s\-']{2,20}$/.test(input) ||
    input.trim().length == 0 ||
    /(.)\1\1+/.test(input)
  );
};
