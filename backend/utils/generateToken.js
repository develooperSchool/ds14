const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();
const JWT_SECRET = "secret";

const generateToken = (body) => {
  const email = body.email;
  console.log(email);
  return jwt.sign({ email }, JWT_SECRET);
};

module.exports = generateToken;
