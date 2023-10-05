const roleDao = require("../dao/urole.dao");

const getAllRoles = async () => {
  let rows = [];
  await roleDao
    .getAllRoles()
    .then((res) => {
      rows = res;
    })
    .catch((err) => {
      console.log(err);
    });

  return rows;
};
////////////

const getRoleById = async (role_Id) => {
  let rows = [];
  await roleDao
    .getRoleById(role_Id)
    .then((result) => {
      rows = result;
    })
    .catch((err) => {
      console.log(err);
    });

  return rows;
};
//
const deleteRoleById = async (id) => {
  // let rows = [];
  await roleDao
    .deleteRoleById(id)
    .then(() => {
      // rows = res;
    })
    .catch((err) => {
      console.log(err);
    });
    
};

const addNewRole = async (body)=>{
  let res="";
await roleDao.addNewRole(body)
.then((result)=>{
  console.log(result);

})
.catch((err)=>{
  console.log(err)
})
return res;
};

const updateRoleById = async (id,body)=>{
  let message ="";

  await roleDao.updateRoleById(id,body)
  .then((result)=>{
    res=result
  })
  .catch((err)=>{
    res=err
  })
  return message
} 

const updateUserById = async (id,body)=>{
  let message = "";
  await roleDao.updateUserById(id,body)
  .then((result)=>{
    res=result
  })
  .catch((err)=>{
    res=err
  })
  return message
}


module.exports ={
    getAllRoles,
    getRoleById,
    deleteRoleById,
    addNewRole,
    updateRoleById,
    updateUserById
    
    
}