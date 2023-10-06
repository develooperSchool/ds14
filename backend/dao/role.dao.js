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

 let row = [];
    try {
      const [rows] = await pool.query("SELECT * FROM userRole");
      row = rows;
    } catch (err) {
      console.error(err);
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
 







<<<<<<< .mine
    try {
      const [rows] = await pool.query("SELECT * FROM userRole");
      row = rows;
    } catch (err) {
      console.error(err);




















=======
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
 
>>>>>>> .theirs
    }
    return row;
  };
 

module.exports={getAllRoles}
=======

















>>>>>>> .theirs
