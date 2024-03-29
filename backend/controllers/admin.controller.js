const adminService = require("../services/admin.service");
const httpStatusCode = require("../utils/HttpStatusCode");
const {SUCCESS} = require("../utils/app.constants")


const getAllAdmin = async (req, res) => {
  await adminService
    .getAllAdmin(req, res)
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

module.exports = { getAllAdmin };
