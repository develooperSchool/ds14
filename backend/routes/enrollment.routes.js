var express=require('express');
var router=express.Router();
var controller=require("../controllers/enrollment.controller");



//Get req for enrollment.......................................
router.get(`/get`,(req,res)=>{
    controller.getEnrollment(req,res);
});


//post req for enrollment.......................................
router.post(`/post`,(req,res)=>{
    controller.postEnrollment(req,res);
});


 
//Update req for enrollment......................................
router.put(`/update/:id`,(req,res)=>{
    controller.putEnrollment(req,res);    
});



//delete req for enrollment.......................................
router.delete(`/delete/:id`,(req,res)=>{
    controller.deleteEnrollment(req,res);    
});



module.exports = router;
