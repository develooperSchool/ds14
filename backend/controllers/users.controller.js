const userService = require("../services/users.service");
const HttpStatusCode = require("../utils/HttpStatusCode");
const { respond } = require("../utils/app.utils");
const {
  NEW_USER_CREATED_SUCCESSFULLY,
  SUCCESS,
  USER_ROLE_UPDATED,
  USER_DEACTIVATED_SUCCESSFULLY,
} = require("../utils/app.constants");
const getAllUsers = async (req, res) => {
  await userService
    .getAllUsers(res)
    .then((rows) => {
      // console.log(rows);
      // res.status(HttpStatusCode.OK).json(rows);
      respond(SUCCESS, HttpStatusCode.OK, rows, new Date(Date.now()), res);
    })
    .catch((err) => {
      console.error(err);
    });
};

const getUserById = async (req, res) => {
  await userService
    .getUserById(req, res)
    .then((rows) => {
      // console.log(rows);
      // res.status(HttpStatusCode.OK).json(rows);
      respond(SUCCESS, HttpStatusCode.OK, rows, new Date(Date.now()), res);
    })
    .catch((error) => {
      console.error(error);
    });
};

const getAllActiveUsers = async (req, res) => {
  await userService
    .getAllActiveUsers(req, res)
    .then((rows) => {
      // console.log(rows);
      // res.status(HttpStatusCode.OK).json(rows);
      respond(SUCCESS, HttpStatusCode.OK, rows, new Date(Date.now()), res);
    })
    .catch((error) => {
      console.error(error);
    });
};

const getUserByEmail = async (req, res) => {
  await userService
    .getUserByEmail(req.query.email)
    .then((rows) => {
      // console.log(rows);
      // res.status(HttpStatusCode.OK).json(rows);
      respond(SUCCESS, HttpStatusCode.OK, rows, new Date(Date.now()), res);
    })
    .catch((error) => {
      console.error(error);
    });
};

const updateUserRoleById = async (req, res) => {
  await userService
    .updateUserRoleById(req, res)
    .then((rows) => {
      // res.status(HttpStatusCode.OK).json("Updated user role")
      respond(
        USER_ROLE_UPDATED,
        HttpStatusCode.OK,
        rows,
        new Date(Date.now()),
        res
      );
    })
    .catch((error) => {
      res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json(error);
    });
};

const deactivateUserById = async (req, res) => {
  await userService
    .deactivateUserById(req, res)
    .then((response) => {
      // res.status(HttpStatusCode.OK).json("User Deactivated successfully");
      respond(
        USER_DEACTIVATED_SUCCESSFULLY,
        HttpStatusCode.OK,
        response,
        new Date(Date.now()),
        res
      );
    })
    .catch((error) => {
      res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json(error);
    });
};

const createUser = async (req, res) => {
  console.log("url", req.url);
  console.log("body", req.body);
  await userService
    .createUser(req, res)
    .then((description) => {
      // console.log(description)
      // res.status(HttpStatusCode.CREATED).json("New User Created successfully");
      respond(
        NEW_USER_CREATED_SUCCESSFULLY,
        HttpStatusCode.CREATED,
        description,
        new Date(Date.now()),
        res
      );
    })
    .catch((error) =>
      res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json(error)
    );
};

module.exports = {
  getAllUsers,
  getUserById,
  getUserByEmail,
  updateUserRoleById,
  deactivateUserById,
  createUser,
  getAllActiveUsers,
};
