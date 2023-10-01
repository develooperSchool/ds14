const service = require("../services/student.service");

const getAllStudents = (req, res) => {
  service.getAllStudents()
    .then((resp) => {
      res.status(200).send(resp);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports={getAllStudents}