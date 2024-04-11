const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'Products',
    password: 'node123@'
});

module.exports = pool.promise();