const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "mano_db",
    port:'8889',
    waitForConnections: "true",
    connectLimit: 10,
    queneLimit: 0
});

module.exports = pool.promise();