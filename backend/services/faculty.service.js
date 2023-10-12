var facultyDao = require("../dao/faculty.dao");

const getAllFaculties = async (req, res) => {
  let result = [];
  await facultyDao
    .getAllFaculties(req, res)
    .then((rows) => {
      result = rows;
    })
    .catch((error) => {
      console.log(error);
    });
  return result;
};

module.exports = { getAllFaculties };
