var express=require('express');
var router=express.Router();
var controller=require("../controllers/faculty2.controller");



//Get req for Facultys.......................................
router.get(`/get`,(req,res)=>{
    controller.getFaculty2(req,res);
});


//post req for Faculty.......................................
router.post(`/post`,(req,res)=>{
    controller.postFaculty2(req,res);
});


 
//Update req for Facultys......................................
router.put(`/update/:id`,(req,res)=>{
    controller.putFaculty2(req,res);    
});



//delete req for Facultys.......................................
router.delete(`/delete/:id`,(req,res)=>{
    controller.deleteFaculty2(req,res);    
});



module.exports = router;
