const service = require("../services/userEnrollment.service");
const HttpStatusCode = require("../utils/HttpStatusCode");
const { respond } = require("../utils/app.utils");
const {
  ALL_ENROLLED_USERS_GET_SUCCESSFULLY,
  ENROLLED_USER_GET_BY_ID_SUCCESSFULLY,
  USER_IS_ENROLLED_SUCCESSFULLY,
  ENROLLED_USER_UPDATED_SUCCESSFULLY,
  USER_ENROLLMENT_DELETED_SUCCESSFULLY,
} = require("../utils/app.constants");

const getAllUserEnrollment = (req, res) => {
  service
    .getAllUserEnrollment()
    .then((rows) => {
      respond(
        ALL_ENROLLED_USERS_GET_SUCCESSFULLY,
        HttpStatusCode.OK,
        rows,
        new Date(Date.now()),
        res
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

const getEnrolledUserById = async (req, res) => {
  await service
    .getEnrolledUserById(req, res)
    .then((rows) => {
      //res.status(HttpStatusCode.OK).json(rows);
      respond(
        ENROLLED_USER_GET_BY_ID_SUCCESSFULLY,
        HttpStatusCode.OK,
        rows,
        new Date(Date.now()),
        res
      );
    })
    .catch((err) => {
      console.log(err);
    });
};
const enrollUser = async (req, res) => {
  await service
    .enrollUser(req, res)
    .then((rows) => {
      respond(
        USER_IS_ENROLLED_SUCCESSFULLY,
        HttpStatusCode.CREATED,
        rows,
        new Date(Date.now()),
        res
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateEnrollUserById = async (req, res) => {
  await service
    .updateEnrollUserById(req, res)
    .then((rows) => {
      respond(
        ENROLLED_USER_UPDATED_SUCCESSFULLY,
        HttpStatusCode.CREATED,
        "ENROLLED USER UPDATED SUCCESSFULLY",
        new Date(Date.now()),
        res
      );
    })
    .catch((err) => {
      console.log(err);
    });
};
const deleteUserEnrollment = async (req, res) => {
  await service
    .deleteUserEnrollment(req, res)
    .then((rows) => {
      respond(
        USER_ENROLLMENT_DELETED_SUCCESSFULLY,
        HttpStatusCode.OK,
        rows,
        new Date(Date.now()),
        res
      );
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = {
  getAllUserEnrollment,
  getEnrolledUserById,
  enrollUser,
  updateEnrollUserById,
  deleteUserEnrollment,
};
