var dao = require("../dao/faculties.dao");

let getFaculties = async (req, res) => {
  let rows;
  await dao
    .getFaculties(req, res)
    .then((resp) => {
      rows = resp;
    })
    .catch((err) => {
      console.log(err);
    });
  return rows;
};

let getFaculty = async (req, res) => {
  let rows;
  await dao
    .getFaculty(req, res)
    .then((resp) => {
      rows = resp;
    })
    .catch((err) => {
      console.log(err);
    });
  return rows;
};

let postFaculty = async (req, res) => {
  let rows;
  await dao
    .postFaculty(req, res)
    .then((resp) => {
      rows = resp;
    })
    .catch((err) => {
      console.log(err);
    });
  return rows;
};

let putFaculty = async (req, res) => {
  let rows;
  await dao
    .putFaculty(req, res)
    .then((resp) => {
      rows = resp;
    })
    .catch((err) => {
      console.log(err);
    });
  return rows;
};

let deleteFaculty = async (req, res) => {
  let rows;
  await dao
    .deleteFaculty(req, res)
    .then((resp) => {
      rows = resp;
    })
    .catch((err) => {
      console.log(err);
    });
  return rows;
};

module.exports = {
  getFaculties,
  getFaculty,
  postFaculty,
  putFaculty,
  deleteFaculty,
};
