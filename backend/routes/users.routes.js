var express = require('express');
var router = express.Router();
var usercontroller=require("../controllers/users.controller")

/* GET users listing. */
router.get('/', function(req, res) {
  usercontroller.getAllUsers(req,res)
});

router.get("/:id", (req,res)=>{
  usercontroller.getUserById(req,res)
})

router.get("/byEmail",(req,res)=>{
  usercontroller.getUserByEmail(req,res)
})

router.put("/:id",(req,res)=>{
  usercontroller.updateUserRoleById(req,res)
})

router.put("/deactivate/:id",(req,res)=>{
  usercontroller.deactivateUserById(req,res)
})

router.post("/add",(req,res)=>{
  usercontroller.createUser(req,res)
})

module.exports = router;
