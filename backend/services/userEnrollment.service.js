const dao = require("../dao/userEnrollment.dao");

const getAllUserEnrollment = async () => {
  let rows = [];
  await dao
    .getAllUserEnrollment()
    .then((res) => {
      rows = res;
    })
    .catch((err) => {
      console.log(err);
    });

  return rows;
};

const getEnrolledUserById = async (req, res) => {
  let rows = [];
  await dao
    .getEnrolledUserById(req, res)
    .then((result) => {
      rows = result;
    })
    .catch((err) => {
      console.log(err);
    });
  return rows;
};
const enrollUser = async (req, res) => {
  let rows = [];
  await dao
    .enrollUser(req, res)
    .then((result) => {
      rows = result;
    })
    .catch((err) => {
      console.log(err);
    });
  return rows;
};
const updateEnrollUserById = async (req, res) => {
  let rows = [];
  await dao
    .updateEnrollUserById(req, res)
    .then((result) => {
      rows = result;
    })
    .catch((err) => {
      console.log(err);
    });
  return rows;
};

const deleteUserEnrollment = async (req, res) => {
  let rows = [];
  await dao
    .deleteUserEnrollment(req, res)
    .then((result) => {
      rows = result;
    })
    .catch((err) => {
      console.log(err);
    });
  return rows;
};

module.exports = {
  getAllUserEnrollment,
  getEnrolledUserById,
  enrollUser,
  updateEnrollUserById,
  deleteUserEnrollment,
};
