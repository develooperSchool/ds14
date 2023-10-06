var pool=require('../config/db-config')

const getAllRoles=async()=>{

    let row = [];
    try {
      const [rows] = await pool.query("SELECT * FROM userRole");
      row = rows;
    } catch (err) {
      console.error(err);
    }
    return row;
  };

module.exports={getAllRoles}