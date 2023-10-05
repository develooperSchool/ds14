var pool=require('../config/db-config')

const getAllRoles=async()=>{

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
 

module.exports={getAllRoles}