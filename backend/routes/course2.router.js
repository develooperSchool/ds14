var express=require('express');
var router=express.Router();
var controller=require("../controllers/course2.controller");



//Get req for courses.......................................
router.get(`/get`,(req,res)=>{
    controller.getCourse2(req,res);
});


//post req for course.......................................
router.post(`/post`,(req,res)=>{
    controller.postCourse2(req,res);
});


 
//Update req for courses......................................
router.put(`/update/:id`,(req,res)=>{
    controller.putCourse2(req,res);    
});



//delete req for courses.......................................
router.delete(`/delete/:id`,(req,res)=>{
    controller.deleteCourse2(req,res);    
});



module.exports = router;
