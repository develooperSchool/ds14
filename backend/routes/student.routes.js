const express = require('express');

const router = express.Router();
const studentController=require("../controllers/student.controller")

/* GET users listing. */
router.get("/", (req, res) => {
    studentController.getAllStudents(req, res);
  });



module.exports = router;
