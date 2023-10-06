var adminDao = require("../dao/admin.dao")

const getAllAdmin = async()=>{
    let rows = []
    await adminDao.getAllAdmin()
    .then((res)=>{
        rows=res
    })
    .catch((err)=>{
        console.log(err)
    })
    return rows
}

module.exports = {getAllAdmin}