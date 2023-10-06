var express = require("express")
var router = express.Router()

var adminController = require("../controllers/admin.controller")

router.get("/",(req,res) =>{
    adminController.getAllAdmin(req,res)
})

module.exports=router