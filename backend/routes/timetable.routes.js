var express=require('express');
var router=express.Router();
var controller=require("../controllers/timetable.controller");



//Get req for timetable.......................................
router.get(`/get`,(req,res)=>{
    controller.getTime(req,res);
});


//post req for timetable......................................
router.post(`/post`,(req,res)=>{
    controller.postTime(req,res);
});


 
//Update req for timetable......................................
router.put(`/update/:id`,(req,res)=>{
    controller.putTime(req,res);    
});



//delete req for timetable.......................................
router.delete(`/delete/:id`,(req,res)=>{
    controller.deleteTime(req,res);    
});



module.exports = router;
