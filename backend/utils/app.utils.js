// utility functions

const isInvalidId = (input) => {
  // should return true if the given id is invalid // 1234adsdf

  //  !/^[0-9]+$/.test(input) --> returns true if the input is non-numeric
  //  input <= 0              --> returns true if the input is less than 0 or equal to 0
  return !/^[0-9]+$/.test(input) || parseInt(input) <= 0;
};

// IsInvalidName ==> return true if the given name is invalid
// IsInvalidEmail ==>  return true if the given email is invalid
// IsInvalidContact
// IsInvalidDob
// IsInvalid....


const IsInvalidName=(input)=>{

return /^[a-zA-Z\s\-']+$/.test(input); 

}; 

// isEmail and isName Created By Musaib 

//Email check function..................
let isEmail=(v)=>{
  let value=v.trim();
  if((!isNaN(value)) || (value.indexOf('@')<2) || (value.lastIndexOf('.')<value.indexOf('@')+3) || (value.lastIndexOf('.')===value.length-1) || (value.indexOf('.com')!=value.lastIndexOf('.')) || ((value.indexOf('.')===value.indexOf('@')+1)) || (value.indexOf(' ')!=(-1)) || (value==="") )  return false;
  return true;
  // if(!isNaN(value)) return false;
  // if(value.indexOf('@')<2) return false;
  // if(value.lastIndexOf('.')<value.indexOf('@')+3) return false;
  // if(value.lastIndexOf('.')===value.length-1) return false;
  // if(value.indexOf('.com')!=value.lastIndexOf('.')) return false;
  // if((value.indexOf('.')===value.indexOf('@')+1)) return false;
  // if(value==="") return false;
  // if(value.indexOf(" ")!=(-1)) return false;
  // return true;
  
};

//Name check function.......................
let isName=(v)=>{
  let name=v.trim();
  if((name==="") || (name.length<3) || (!isNaN(name)) || (name.indexOf('..')!=(-1)) ) return false;
  return true;
}


// isDateValid created By Neha Sapte 
function isDateValid(inputDate) {
  return /^\d{4}-\d{2}-\d{2}$/.test(inputDate) ;
}

//below cvalidation created By Meera Sadar

const isInvalidPassword = (input) =>{
  return ! /^(?=.*[A-Za-z])(?=.*\d)[a-zA-Z\d]{8,20}$/.test(input)
};

const isInvalidYear = (input) =>{
  return ! /^d{4}$/.test(input)
};

const isInvalidGender = (input) =>{
  return ! /^(male|female)$/.test(input)
};
const isInvalidName = (input) =>{
  return ! / ^[A-Za-z']{2,20}$  /.test(input)
};

const isInValidContact = (input) =>{
  return ! /^(\+91|91)[789]\d{9}$/.test(input)
};
const isInvalidCaste = (input) =>{
  return ! / ^[A-Za-z']{1,20}$  /.test(input)
};

module.exports = { isInvalidId,IsInvalidName,isEmail,isDateValid,isName,isInvalidPassword ,isInvalidYear,
  isInvalidName,isInValidContact,isInvalidCaste,isInvalidGender};
