var express=require('express');
var router=express.Router();
var controller=require("../controllers/subjects.controller");
const validation=require('../middlewares/validations/subjects.Validation');



//Get req for courses.......................................
router.get(`/get`,(req,res)=>{controller.getSubjects(req,res);});


//post req for course.......................................
router.post(`/post`,validation.postSubjectsValidation,controller.postSubjects);


//Update req for courses......................................
router.put(`/update/:id`,validation.putSubjectsValidation,controller.putSubjects);


//delete req for courses.......................................
router.delete(`/delete/:id`,validation.deleteSubjectsValidation,controller.deleteSubjects);



module.exports = router;
