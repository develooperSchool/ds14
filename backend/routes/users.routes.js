const express = require('express');
const router = express.Router();
const usercontroller=require("../controllers/users.controller")
const userValidation = require("../middlewares/validations/users.validation")

router.get('/', (req, res)=> {
  usercontroller.getAllUsers(req,res)
});

router.post("/add",
  userValidation.createUserValidation,
  usercontroller.createUser
)

router.get("/:id", 
  userValidation.getUserValidationByID,
  usercontroller.getUserById
)

router.get("/byEmail",(req,res)=>{
  usercontroller.getUserByEmail(req,res)
})

router.put("/:id",
  userValidation.updatetUserRoleValidationByID,
  usercontroller.updateUserRoleById
)

router.put("/deactivate/:id",
  userValidation.deactivateUserValidationByID,
  usercontroller.deactivateUserById
)

module.exports = router;
