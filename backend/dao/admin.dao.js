var db = require("../config/db-config")

const getAllAdmin= async()=>{
    let result = []
    let values =[]
    try{
        let sqlQuery = "SELECT * FROM user_master where role_id=1"
        const [rows,fields] = await db.query(sqlQuery,values)
        result = rows
    }
    catch(error) {
        console.error(error)

    }
    return result
}

module.exports = {getAllAdmin}