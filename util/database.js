const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'beautymaker',
    password: 'Hungergames22'
});

module.exports = pool.promise();