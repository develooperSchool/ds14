var guestDao = require("../dao/guest.dao")

const getAllGuests = async ()=>{
    let rows = []
    await guestDao.getAllGuests()
    .then((res)=>{
        rows=res
    })
    .catch((err)=>{
        console.error(err)
    })
    return rows
}
module.exports={getAllGuests}