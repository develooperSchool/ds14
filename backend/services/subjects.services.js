var dao = require("../dao/subjects.dao");

let getSubjects = async (req, res) => {
  let rows;
  await dao
    .getSubjects(res, res)
    .then((resp) => {
      rows = resp;
    })
    .catch((err) => {
      console.log(err);
    });
  return rows;
};

let postSubjects = async (req, res) => {
  let rows;
  await dao
    .postSubjects(req, res)
    .then((resp) => {
      rows = resp;
    })
    .catch((err) => {
      console.log(err);
    });
  return rows;
};

let putSubjects = async (req, res) => {
  let rows;
  await dao
    .putSubjects(req, res)
    .then((resp) => {
      rows = resp;
    })
    .catch((err) => {
      console.log(err);
    });
  return rows;
};

let deleteSubjects = async (req, res) => {
  let rows;
  await dao
    .deleteSubjects(req, res)
    .then((resp) => {
      rows = resp;
    })
    .catch((err) => {
      console.log(err);
    });
  return rows;
};

module.exports = { getSubjects, postSubjects, putSubjects, deleteSubjects };
