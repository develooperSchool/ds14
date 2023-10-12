const guestDao = require("../dao/guest.dao")

const getAllGuests = async (req,res)=>{
    let rows = []
    await guestDao.getAllGuests(req,res)
    .then((result)=>{
        rows=result
    })
    .catch((err)=>{
        console.error(err)
    })
    return rows
}
module.exports={getAllGuests}