const { error } = require("@hapi/joi/lib/annotate");
var userdao = require("../dao/users.dao");

const getAllUsers = async (res) => {
  let rows = [];
  await userdao
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
  await userdao
    .getUserById(req, res)
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
  await userdao
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
  await userdao
    .updateUserRoleById(req, res)
    .then((result) => (rows = result))
    .catch((error) => console.log(error));
  return rows;
};

const deactivateUserById = async (req, res) => {
  let rows = "";
  await userdao
    .deactivateUserById(req, res)
    .then((result) => (rows = result))
    .catch((error) => console.log(error));
  return rows;
};

const createUser = async (req, res) => {
  let rows = "";
  await userdao
    .createUser(req, res)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
  return rows;
};
module.exports = {
  getAllUsers,
  getUserById,
  getUserByEmail,
  updateUserRoleById,
  deactivateUserById,
  createUser,
};
