const service = require("../services/student.service");
const httpStatusCode = require("../utils/HttpStatusCode");

const getAllStudents = (req, res) => {
  service
    .getAllStudents(req, res)
    .then((resp) => {
      res.status(httpStatusCode.OK).json(resp);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { getAllStudents };
