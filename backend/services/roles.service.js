var roleDao=require("../dao/role.dao")

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

module.exports={getAllRoles}