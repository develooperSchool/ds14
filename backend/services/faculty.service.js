var facultyDao = require("../dao/faculty.dao")

const getAllFaculties = async()=>{
    let rows = []
    await facultyDao.getAllFaculties()
    .then((res)=>{
        rows=res
    })
    .catch((err)=>{
        console.log(err)
    })
    return rows
}

module.exports = {getAllFaculties}