var db = require("../config/db-config")

const getAllFaculties= async()=>{
    let result = []
    let values =[]
    try{
        let sqlQuery = "SELECT * FROM user_master where role_id=2"
        const [rows,fields] = await db.query(sqlQuery,values)
        result = rows
    }
    catch(error) {
        console.error(error)

    }
    return result
}

module.exports = {getAllFaculties}