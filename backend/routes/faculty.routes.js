var express = require("express")
var router = express.Router()

var facultyController = require("../controllers/faculty.controller")

router.get("/",(req,res) =>{
    facultyController.getAllFaculties(req,res)
})

module.exports=router;