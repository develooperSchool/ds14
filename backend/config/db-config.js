const mysql = require("mysql2");

// Create a connection pool
const pool = mysql.createPool({
  host: "srv944.hstgr.io",
  user: "u904598717_dev_ds",
  password: "Dev_ds@123",
  database: "u904598717_dev_ds",
  // nestTables: true,
  //   waitForConnections: true,
  //   connectionLimit: 10, // Adjust this based on your needs
  //   queueLimit: 0, // 0 means unlimited queue
});

// Export the pool to use it in your routes/controllers
module.exports = pool.promise();
