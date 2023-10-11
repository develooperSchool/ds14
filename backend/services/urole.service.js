const roleDao = require("../dao/urole.dao");

const getAllRoles = async (req,res) => {
  let rows = [];
  await roleDao
    .getAllRoles(req,res)
    .then((res) => {
      rows = res;
    })
    .catch((err) => {
      console.log(err);
    });

  return rows;
};
////////////

const getRoleById = async (req,res) => {
  let rows = [];
  await roleDao
    .getRoleById(req,res)
    .then((result) => {
      rows = result;
    })
    .catch((err) => {
      console.log(err);
    });

  return rows;
};
//
const deleteRoleById = async (req,res) => {
  // let rows = [];
  await roleDao
    .deleteRoleById(req,res)
    .then(() => {
      // rows = res;
    })
    .catch((err) => {
      console.log(err);
    });
    
};

const addNewRole = async (req, res)=>{
  let message="";
await roleDao.addNewRole(req,res)
.then((result)=>{
  console.log(result);

})
.catch((err)=>{
  console.log(err)
})
return message;
};

const updateRoleById = async (req,res)=>{
  let message ="";

  await roleDao.updateRoleById(req,res)
  .then((result)=>{
    res=result
  })
  .catch((err)=>{
    res=err
  })
  return message
} 

const updateUserById = async (req,res)=>{
  let message = "";
  await roleDao.updateUserById(req,res)
  .then((result)=>{
    res=result
  })
  .catch((err)=>{
    res=err
  })
  return message
}
const userLogin = async (username,password)=>{
  let res="";
  await roleDao.userLogin(username,password)
  .then((result)=>{
    console.log(result)
    res=result
  })
  .catch((err)=>{
    res=err
  })
  return res
}



module.exports ={
    getAllRoles,
    getRoleById,
    deleteRoleById,
    addNewRole,
    updateRoleById,
    updateUserById,
    userLogin
    
    
}