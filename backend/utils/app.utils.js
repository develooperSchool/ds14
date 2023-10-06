
const isValidId = (value) =>{

    return !/^[0-9] + $/.test(value)  ||  parseInt(value) <= 0;


}


module.exports = {isValidId}