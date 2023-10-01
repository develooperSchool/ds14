var express = require('express');
var router = express.Router();
var usercontroller=require("../controllers/users.controller")

/* GET users listing. */
router.get('/', function(req, res, next) {
  usercontroller.getAllUsers(req,res)
});

module.exports = router;
