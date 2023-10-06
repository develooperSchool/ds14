var express = require("express");
var rolecontroller = require("../controllers/role.controller");
// var rolevalidation=require('../middlewares/validations/role.validation')
<<<<<<< .mine
var rolecontroller=require('../controllers/role.controller')
// var rolevalidation=require('../middlewares/validations/role.validation')
=======
var rolecontroller = require("../controllers/role.controller");
// var rolevalidation=require('../middlewares/validations/role.validation')
>>>>>>> .theirs

var router = express.Router();
router.get("/", (req, res) => {
  rolecontroller.getAllRoles(req, res);
});<<<<<<< .mine
router.get("/", (req, res) => {
    rolecontroller.getAllRoles(req, res);
  });
=======
router.get("/", (req, res) => {
  rolecontroller.getAllRoles(req, res);
});
>>>>>>> .theirs
module.exports = router;
