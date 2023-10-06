var express = require("express");
var rolecontroller = require("../controllers/role.controller");
// var rolevalidation=require('../middlewares/validations/role.validation')

var router = express.Router();
router.get("/", (req, res) => {
  rolecontroller.getAllRoles(req, res);
});
module.exports = router;
