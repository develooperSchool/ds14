const sdao = require("../dao/student.dao");

const getAllStudents = async (req, res) => {
  let rows = [];
  await sdao
    .getAllStudents(req, res)
    .then((resp) => {
      rows = resp;
    })
    .catch((err) => {
      console.log(err);
    });

  return rows;
};

module.exports = { getAllStudents };
