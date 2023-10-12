var facultyService = require("../services/faculty.service");

const getAllFaculties = async (req, res) => {
  await facultyService
    .getAllFaculties(req, res)
    .then((rows) => {
      console.log(rows);
      res.status(200).json(rows);
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = { getAllFaculties };
