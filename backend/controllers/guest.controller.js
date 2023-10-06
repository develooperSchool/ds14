var guestService = require("../services/guest.service")

const getAllGuests= async (req,res) =>{
    await guestService.getAllGuests()
    .then((result)=>{
        console.log(result)
        res.status(200).json(result)

    })
    .catch((err)=>{
        console.error(err)
    })
    
}

module.exports = {getAllGuests}