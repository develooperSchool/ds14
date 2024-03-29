const { error } = require("@hapi/joi/lib/annotate");
const userDao = require("../dao/users.dao");

const getAllUsers = async (res) => {
  let rows = [];
  await userDao
    .getAllUsers(res)
    .then((result) => {
      rows = result;
    })
    .catch((err) => {
      console.error(err);
    });
  return rows;
};

const getUserById = async (req, res) => {
  let rows = [];
  await userDao
    .getUserById(req, res)
    .then((res) => {
      rows = res;
    })
    .catch((err) => {
      console.error(err);
    });
  return rows;
};

const getAllActiveUsers = async (req, res) => {
  let rows = [];
  await userDao
    .getAllActiveUsers(req, res)
    .then((res) => {
      rows = res;
    })
    .catch((err) => {
      console.error(err);
    });
  return rows;
};

const getUserByEmail = async (req, res) => {
  let rows = [];
  await userDao
    .getUserByEmail(req, res)
    .then((res) => {
      rows = res;
    })
    .catch((err) => {
      console.error(err);
    });
};

const updateUserRoleById = async (req, res) => {
  let rows = "";
  await userDao
    .updateUserRoleById(req, res)
    .then((result) => (rows = result))
    .catch((error) => console.log(error));
  return rows;
};

const deactivateUserById = async (req, res) => {
  let response = "";
  await userDao
    .deactivateUserById(req, res)
    .then((result) => (response = result))
    .catch((error) => console.log(error));
  return response;
};

const createUser = async (req, res) => {
  let description = "";
  await userDao
    .createUser(req, res)
    .then((result) => {
      description = result;
    })
    .catch((error) => {
      description = error;
    });
  return description;
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
