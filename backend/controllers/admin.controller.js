const adminService = require("../services/admin.service");

const getAllAdmin = async (req, res) => {
  await adminService
    .getAllAdmin(req, res)
    .then((rows) => {
      console.log(rows);
      res.status(200).json(rows);
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = { getAllAdmin };
