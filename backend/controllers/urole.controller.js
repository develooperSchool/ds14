const roleService = require("../services/urole.service");

const getAllRoles = async (req, res) => {
 await roleService
    .getAllRoles()
    .then((rows) => {
      res.status(200).send(rows);
    })
    .catch((err) => {
      console.log(err);
    });
};
//////////
const getRoleById = (req, res) => {
  console.log(req.params.id);
  roleService
    .getRoleById(req.params.id)
    .then((rows) => {
      res.status(200).send(rows);
    })
    .catch((err) => {
      console.log(err);
    });
};


const deleteRoleById = (req, res) => {
  console.log(req.params.id);
  roleService
    .deleteRoleById(req.params.id)
    .then(() => {
      res.status(200).send("ROLE ASSOCIATE WITH PERTIULAR ID IS DELETED");
    })
    .catch((err) => {
      console.log(err);
    });
};

const addNewRole = async (req ,res)=>{
  await roleService.addNewRole(req.body)
  .then((result)=>{
    res.status(200).send("role added successfully!")
  })
  .catch((err)=>
    console.log(err)
  )

};

const updateRoleById = async (req,res)=>{

 await roleService.updateRoleById(req.params.id,req.body)
 .then((result)=>res.status(200).send("role updated successfully!"))
 .catch((err)=>res.status(500).send(err))
}
const updateUserById = async (req,res)=>{
  await roleService.updateUserById(req.params.id,req.body)
  .then((result)=>res.status(200).send("username updated successfully"))
  .catch((err)=>res.status(500).send(err))
  
}
 
const userLogin = async (req,res)=>{
const{username,password}=req.body;
await roleService.userLogin(username,password)
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