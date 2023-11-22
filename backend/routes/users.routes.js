const express = require("express");
const router = express.Router();
const userController = require("../controllers/users.controller");
const userValidation = require("../middlewares/validations/users.validation");

router.get("/isActive", (req, res) => {
  userController.getAllActiveUsers;
});

router.get("/", (req, res) => {
  userController.getAllUsers(req, res);
});

router.post(
  "/add",
  userValidation.createUserValidation,
  userController.createUser
);

// router.get(
//   "/isActive/:id",
//   userValidation.getIsActiveUserValidation,
//   userController.getAllActiveUsers
// );

router.get("/isActive", userController.getAllActiveUsers);

router.get("/byEmail", (req, res) => {
  userController.getUserByEmail(req, res);
});

router.get(
  "/:id",
  userValidation.getUserValidationByID,
  userController.getUserById
);

router.put(
  "/updateRole/:id",
  userValidation.updatetUserRoleValidationByID,
  userController.updateUserRoleById
);

router.put(
  "/deactivate/:id",
  userValidation.deactivateUserValidationByID,
  userController.deactivateUserById
);

module.exports = router;
