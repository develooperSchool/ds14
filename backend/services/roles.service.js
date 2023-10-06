var roleDao = require("../dao/role.dao");

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
 };<<<<<<< .mine
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
=======
  let rows = [];
  await roleDao
    .getAllRoles()
    .then((res) => {
      rows = res;
    })
    .catch((err) => {
      console.log(err);
    });



>>>>>>> .theirs

 return rows;
};
<<<<<<< .mine


=======
};

>>>>>>> .theirs
