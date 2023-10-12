const adminDao = require("../dao/admin.dao");

const getAllAdmin = async (req, res) => {
  let rows = [];
  await adminDao
    .getAllAdmin(req, res)
    .then((result) => {
      rows = result;
    })
    .catch((err) => {
      console.log(err);
    });
  return rows;
};

module.exports = { getAllAdmin };
