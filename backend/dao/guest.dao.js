const db = require("../config/db-config")
const SqlError = require("../errors/SqlError")

const getAllGuests = async(req,res)=>{
    let result=[]
    let values=[]
    try{
        let sqlQuery = "SELECT * FROM user_master WHERE role_id=4"
        const[rows,fields] = await db.query(sqlQuery,values)
        result=rows
    }
    catch(error){
        throw new SqlError(String(error.sqlMessage).toUpperCase(), res)
    }
    return result
}
module.exports = {getAllGuests}