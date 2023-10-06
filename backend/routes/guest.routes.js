var express = require("express")
var router = express.Router()

var guestController = require("../controllers/guest.controller")

router.get("/",(req,res) =>{
    guestController.getAllGuests(req,res)
})

module.exports=router