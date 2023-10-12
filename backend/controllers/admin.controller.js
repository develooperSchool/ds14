const adminService = require("../services/admin.service");
const httpStatusCode = require("../utils/HttpStatusCode");

const getAllAdmin = async (req, res) => {
  await adminService
    .getAllAdmin(req, res)
    .then((rows) => {
      console.log(rows);
      res.status(httpStatusCode.OK).json(rows);
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = { getAllAdmin };
