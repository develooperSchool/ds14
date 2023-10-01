const sdao = require("../dao/student.dao");

const getAllStudents = async () => {
  let rows = [];
  await sdao
    .getAllStudents()
    .then((res) => {
      rows = res;
    })
    .catch((err) => {
      console.log(err);
    });

  return rows;
};
module.exports={getAllStudents}
