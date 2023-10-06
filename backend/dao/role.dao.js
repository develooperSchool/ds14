var pool = require("../config/db-config");

const getAllRoles = async () => {
  let row = [];
  try {
    const [rows] = await pool.query("SELECT * FROM userRole");
    row = rows;
  } catch (err) {
    console.error(err);
  }
  return row;
};

let result=[]
    try
    {  
    let sql="select * from roles";
    let result=[]

    const [rows] = await pool.query('SELECT * FROM roles');
   return rows;
 
    }
    catch(err)
    {
        console.log(err)
    }
}
 

module.exports={getAllRoles}<<<<<<< .mine
    try
    {  
    let sql="select * from roles";
    let result=[]

    const [rows] = await pool.query('SELECT * FROM roles');
   return rows;
 
    }
    catch(err)
    {
        console.log(err)
    }
}
 

module.exports={getAllRoles}
=======

















>>>>>>> .theirs
