var express = require("express");
const roleController = require("../controllers/urole.controller");
var router = express.Router();

//api for getting all role 
///  /api/v1/urole
router.get("/", function(req, res) {
  roleController.getAllRoles(req, res);
});

////////for get role by id
//  /api/v1/urole/id
router.get("/:id", (req, res) => {
  roleController.getRoleById(req,res);
});
// for delete role by id
//   /api/v1/urole/delete/:id
router.delete("/delete/:id", (req, res) => {
  roleController.deleteRoleById(req, res);
});
//to add new role
// /api/v1/urole/addrole
router.post("/addrole",(req,res)=>{
  roleController.addNewRole(req,res)
});
// to update role by id
// /api/v1/urole/updaterole
router.put("/updaterole/:id",(req,res)=>{
  roleController.updateRoleById(req,res)
})
/// update user by id
// /api/v1/urole/updateuser
router.put("/updateuser/:id",(req,res)=>{
  roleController.updateUserById(req,res)
})
//use login api
//api/v1/urole/userlogin
router.post("/userlogin",(req,res)=>{
  roleController.userLogin(req,res)
})


module.exports = router;

