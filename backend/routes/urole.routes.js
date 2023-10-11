var express = require("express");
const roleController = require("../controllers/urole.controller");
const roleValidation = require("../middlewares/validations/urole.validation")
var router = express.Router();

router.get("/getAllRoles", function(req, res) {
  roleController.getAllRoles(req, res);
});

router.get("/:id",
roleValidation.getRoleByIdValidation,
roleController.getRoleById
);

router.delete("/delete/:id", 
roleValidation.getRoleByIdValidation,
roleController.deleteRoleById
);

router.post("/addrole",
roleValidation.addRoleValidation,
roleController.addNewRole
);

router.put("/updaterole/:id",
roleValidation.getRoleByIdValidation,
roleController.updateRoleById
)

router.put("/updateuser/:id",
roleValidation.getRoleByIdValidation,
roleController.updateUserById
)

router.post("/userlogin",
roleValidation.userLoginValidation,
roleController.userLogin
)



module.exports = router;

