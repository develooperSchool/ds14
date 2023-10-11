var express=require('express');
var router=express.Router();
var controller=require("../controllers/course2.controller");
const validation=require('../middlewares/validations/course2.validation');



//Get req for courses.......................................
router.get(`/get`,(req,res)=>{controller.getCourse2(req,res);});


//post req for course.......................................
router.post(`/post`,validation.postCourse2Validation,controller.postCourse2);


 
//Update req for courses......................................
router.put(`/update/:id`,validation.putCourse2Validation,controller.putCourse2);



//delete req for courses.......................................
router.delete(`/delete/:id`,validation.deleteCourse2validation,controller.deleteCourse2);



module.exports = router;
