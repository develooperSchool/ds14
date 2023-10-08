var express=require('express');
var router=express.Router();
var controller=require("../controllers/subjects.controller");



//Get req for courses.......................................
router.get(`/get`,(req,res)=>{
    controller.getSubjects(req,res);
});


//post req for course.......................................
router.post(`/post`,(req,res)=>{
    controller.postSubjects(req,res);
});


 
//Update req for courses......................................
router.put(`/update/:id`,(req,res)=>{
    controller.putSubjects(req,res);    
});



//delete req for courses.......................................
router.delete(`/delete/:id`,(req,res)=>{
    controller.deleteSubjects(req,res);    
});



module.exports = router;
