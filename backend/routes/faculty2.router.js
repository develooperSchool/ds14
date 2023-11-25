var express=require('express');
var router=express.Router();
var controller=require("../controllers/faculty2.controller");
const validation=require('../middlewares/validations/faculty2.Validation');

router.get(`/get`,(req,res)=>{ controller.getFaculty2(req,res);});

router.post(`/post`,validation.postFaculty2Validation,controller.postFaculty2);

router.put(`/update/:id`,validation.putFaculty2Validation,controller.putFaculty2);

router.delete(`/delete/:id`,validation.deleteFaculty2Validation,controller.deleteFaculty2);

module.exports = router;
