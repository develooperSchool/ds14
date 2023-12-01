var express=require('express');
var router=express.Router();
var controller=require("../controllers/course2.controller");
const validation=require('../middlewares/validations/course2.validation');

router.get(`/get`,(req,res)=>{controller.getCourse2(req,res);});

router.get("/getById/:Id",validation.getCourseByIdValidation,controller.getCourse2ById);

router.post(`/post`,validation.postCourse2Validation,controller.postCourse2);

router.put(`/update/:id`,validation.putCourse2Validation,controller.putCourse2);

router.delete(`/delete/:id`,validation.deleteCourse2validation,controller.deleteCourse2);

module.exports = router;
