const express = require("express")
const router = express.Router()

const facultyController = require("../controllers/faculty.controller")

router.get("/",(req,res) =>{
    facultyController.getAllFaculties(req,res)
})

module.exports=router;