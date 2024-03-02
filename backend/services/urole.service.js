const roleDao = require("../dao/urole.dao");
const generateToken = require("../utils/generateToken");

const getAllRoles = async (req, res) => {
  let rows = [];
  await roleDao
    .getAllRoles(req, res)
    .then((res) => {
      rows = res;
    })
    .catch((err) => {
      console.log(err);
    });

  return rows;
};

const getRoleById = async (req, res) => {
  let rows = [];
  await roleDao
    .getRoleById(req, res)
    .then((result) => {
      rows = result;
    })
    .catch((err) => {
      console.log(err);
    });

  return rows;
};
//
const deleteRoleById = async (req, res) => {
  await roleDao
    .deleteRoleById(req, res)
    .then((rows) => {})
    .catch((err) => {
      console.log(err);
    });
};

const addNewRole = async (req, res) => {
  let message = "";
  await roleDao
    .addNewRole(req, res)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
  return message;
};

const updateRoleById = async (req, res) => {
  let message = "";

  await roleDao
    .updateRoleById(req, res)
    .then((result) => {
      res = result;
    })
    .catch((err) => {
      res = err;
    });
  return message;
};

const updateUserById = async (req, res) => {
  const rows = [];
  let message = "";
  await roleDao
    .updateUserById(req, res)
    .then((result) => {
      // message = result;
      rows = result;
    })
    .catch((err) => {
      message = err;
    });
  return rows;
};
const userLogin = async (req, res) => {
  let response = "";
  await roleDao
    .userLogin(req, res)
    .then((result) => {
      if (typeof result === "string") {
        response = result;
      } else {
        const token = generateToken(result);
        response = { ...result, token };
      }
    })
    .catch((err) => {
      response = err;
    });
  return response;
};

module.exports = {
  getAllRoles,
  getRoleById,
  deleteRoleById,
  addNewRole,
  updateRoleById,
  updateUserById,
  userLogin,
};
