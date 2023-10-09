const express = require('express');
const router = express.Router();
const usercontroller=require("../controllers/users.controller")
const userValidation = require("../middlewares/validations/users.validation")

router.get('/', function(req, res) {
  usercontroller.getAllUsers(req,res)
});

router.use("/:id",(req,res,next)=>{
  userValidation.getUserValidationByID(req,res,next)
})

router.get("/:id", (req,res)=>{
  usercontroller.getUserById(req,res)
})

router.get("/byEmail",(req,res)=>{
  usercontroller.getUserByEmail(req,res)
})

router.use("/:id",(req,res,next)=>{
  userValidation.updatetUserRoleValidationByID(req,res,next)
})

router.put("/:id",(req,res)=>{
  usercontroller.updateUserRoleById(req,res)
})

router.use("/deactivate/:id",(req,res,next)=>{
  userValidation.deactivateUserValidationByID(req,res,next)
})

router.put("/deactivate/:id",(req,res)=>{
  usercontroller.deactivateUserById(req,res)
})

router.use("/deactivate/:id",(req,res,next)=>{
  userValidation.deactivateUserValidationByID(req,res,next)
})

router.post("/add",
  userValidation.createUserValidation,
  usercontroller.createUser
)

// router.post("/add",(req,res)=>{
//   usercontroller.createUser(req,res)
// })

module.exports = router;
