const service = require("../services/student.service");
const httpStatusCode = require("../utils/HttpStatusCode");
const {SUCCESS} = require("../utils/app.constants")


const getAllStudents = (req, res) => {
  service
    .getAllStudents(req, res)
    .then((resp) => {
      // res.status(httpStatusCode.OK).json(resp);
      respond(
        SUCCESS,
        HttpStatusCode.OK,
        rows,
        new Date(Date.now()),
        res
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { getAllStudents };
