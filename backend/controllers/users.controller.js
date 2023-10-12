const { error } = require("@hapi/joi/lib/base");
const SqlError = require("../errors/SqlError");
const userservice = require("../services/users.service");
const HttpStatusCode = require("../utils/HttpStatusCode");

const getAllUsers = async (req, res) => {
  await userservice
    .getAllUsers(res)
    .then((rows) => {
      console.log(rows);
      res.status(HttpStatusCode.OK).json(rows);
    })
    .catch((err) => {
      console.error(err);
    });
};

const getUserById = async (req, res) => {
  await userservice
    .getUserById(req, res)
    .then((rows) => {
      console.log(rows);
      res.status(HttpStatusCode.OK).json(rows);
    })
    .catch((error) => {
      console.error(error);
    });
};

const getUserByEmail = async (req, res) => {
  await userservice
    .getUserByEmail(req.query.email)
    .then((rows) => {
      console.log(rows);
      res.status(HttpStatusCode.OK).json(rows);
    })
    .catch((error) => {
      console.error(error);
    });
};

const updateUserRoleById = async (req, res) => {
  await userservice
    .updateUserRoleById(req, res)
    .then((rows) => res.status(HttpStatusCode.OK).json("Updated user role"))
    .catch((error) => {
      res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json(error);
    });
};

const deactivateUserById = async (req, res) => {
  await userservice
    .deactivateUserById(req, res)
    .then((result) => {
      res.status(HttpStatusCode.OK).json("User Deactivated successfully");
    })
    .catch((error) => {
      res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json(error);
    });
};

const createUser = async (req, res) => {
  await userservice
    .createUser(req, res)
    .then((result) => {
      res.status(HttpStatusCode.CREATED).json("New User Created successfully");
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
};
