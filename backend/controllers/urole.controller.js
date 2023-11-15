const roleService = require("../services/urole.service");

const getAllRoles = async (req, res) => {
 await roleService
    .getAllRoles(req,res)
    .then((rows) => {
      res.status(200).json(rows);
    })
    .catch((err) => {
      console.log(err);
    });
};
//////////
const getRoleById = (req, res) => {
  
  roleService
    .getRoleById(req,res)
    .then((rows) => {
      res.status(200).json(rows);
    })
    .catch((err) => {
      console.log(err);
    });
};


const deleteRoleById = (req, res) => {
  
  roleService
    .deleteRoleById(req,res)
    .then(() => {
      res.status(200).json("ROLE ASSOCIATE WITH PERTIULAR ID IS DELETED");
    })
    .catch((err) => {
      console.log(err);
    });
};

const addNewRole = async (req ,res)=>{
  await roleService.addNewRole(req.body)
  .then((result)=>{
    res.status(200).json("role added successfully!")
  })
  .catch((err)=>
    console.log(err)
  )

};

const updateRoleById = async (req,res)=>{

 await roleService.updateRoleById(req.params.id,req.body)
 .then((result)=>res.status(200).json("role updated successfully!"))
 .catch((err)=>res.status(500).send(err))
}
const updateUserById = async (req,res)=>{
  await roleService.updateUserById(req.params.id,req.body)
  .then((result)=>res.status(200).json("username updated successfully"))
  .catch((err)=>res.status(500).send(err))
  
}
 
const userLogin = async (req,res)=>{
const{email,password}=req.body;
await roleService.userLogin(email,password)
.then((result)=>res.status(200).json(result))
.catch((err)=>res.status(500).send(err))
}
module.exports = {
    getAllRoles,
    getRoleById,
    deleteRoleById,
    addNewRole,
    updateRoleById,
    updateUserById,
    userLogin
}