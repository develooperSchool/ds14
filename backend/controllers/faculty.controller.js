const facultyService = require("../services/faculty.service");
const httpStatusCode = require("../utils/HttpStatusCode")

const getAllFaculties = async (req, res) => {
  await facultyService
    .getAllFaculties(req, res)
    .then((rows) => {
      console.log(rows);
      res.status(httpStatusCode.OK).json(rows);
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = { getAllFaculties };
