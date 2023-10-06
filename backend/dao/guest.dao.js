var db = require("../config/db-config")

const getAllGuests = async()=>{
    let result=[]
    let values=[]
    try{
        let sqlQuery = "SELECT * FROM user_master WHERE role_id=4"
        const[rows,fields] = await db.query(sqlQuery,values)
        result=rows
    }
    catch(error){
        console.log(error)
    }
    return result
}
module.exports = {getAllGuests}