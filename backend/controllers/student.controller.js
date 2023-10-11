const service = require("../services/student.service");

const getAllStudents = (req, res) => {
  service
    .getAllStudents(req, res)
    .then((resp) => {
      res.status(200).json(resp);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { getAllStudents };
