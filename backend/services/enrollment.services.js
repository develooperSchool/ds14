var dao = require("../dao/enrollment.dao");

let getEnrollment = async (req, res) => {
  let rows;
  await dao
    .getEnrollment(res, res)
    .then((resp) => {
      rows = resp;
    })
    .catch((err) => {
      console.log(err);
    });
  return rows;
};

let getEnrollmentData = async (req, res) => {
  let rows;
  await dao
    .getEnrollmentData(req, res)
    .then((resp) => {
      rows = resp;
    })
    .catch((err) => {
      console.log(err);
    });
  return rows;
};

let getEnrollmentDataById = async (req, res) => {
  let rows;
  await dao
    .getEnrollmentDataById(req, res)
    .then((resp) => {
      rows = resp;
    })
    .catch((err) => {
      console.log(err);
    });
  return rows;
};

let getEnrolledCoursesByStudentId = async (req, res) => {
  let rows;
  await dao
    .getEnrolledCoursesByStudentId(req, res)
    .then((resp) => {
      rows = resp;
    })
    .catch((err) => {
      console.log(err);
    });
  return rows;
};

let postEnrollment = async (req, res) => {
  let rows;
  await dao
    .postEnrollment(req, res)
    .then((resp) => {
      rows = resp;
    })
    .catch((err) => {
      console.log(err);
    });
  return rows;
};

let putEnrollment = async (req, res) => {
  let rows;
  await dao
    .putEnrollment(req, res)
    .then((resp) => {
      rows = resp;
    })
    .catch((err) => {
      console.log(err);
    });
  return rows;
};

let deleteEnrollment = async (req, res) => {
  let rows;
  await dao
    .deleteEnrollment(req, res)
    .then((resp) => {
      rows = resp;
    })
    .catch((err) => {
      console.log(err);
    });
  return rows;
};

module.exports = {
  getEnrollmentDataById,
  getEnrollment,
  getEnrollmentData,
  postEnrollment,
  putEnrollment,
  deleteEnrollment,
  getEnrolledCoursesByStudentId,
};
