var express = require('express');

var router = express.Router();
var studentcontroller=require("../controllers/student.controller")

/* GET users listing. */
router.get("/", (req, res) => {
    studentcontroller.getAllStudents(req, res);
  });



module.exports = router;
