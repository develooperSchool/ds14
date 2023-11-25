const guestService = require("../services/guest.service")
const httpStatusCode = require("../utils/HttpStatusCode");

const getAllGuests= async (req,res) =>{
    await guestService.getAllGuests(req,res)
    .then((result)=>{
        console.log(result)
        res.status(httpStatusCode.OK).json(result)

    })
    .catch((err)=>{
        console.error(err)
    })
    
}

module.exports = {getAllGuests}