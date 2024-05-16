const facultyService = require("../services/faculty.service");
const HttpStatusCode = require("../utils/HttpStatusCode");
const { SUCCESS } = require("../utils/app.constants");
const { respond } = require("../utils/app.utils");

const getAllFaculties = async (req, res) => {
  await facultyService
    .getAllFaculties(req, res)
    .then((rows) => {
      // console.log(rows);
      // res.status(httpStatusCode.OK).json(rows);
      respond(
        SUCCESS,
        HttpStatusCode.OK,
        rows,
        new Date(Date.now()),
        res
      );
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = { getAllFaculties };
