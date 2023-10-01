var express=require('express');
var rolecontroller=require('../controllers/role.controller')
var rolevalidation=require('../middlewares/validations/role.validation')

var router=express.Router();


router.get('/',rolevalidation.addRoleValidation,rolecontroller.getAllRoles)
module.exports = router;
