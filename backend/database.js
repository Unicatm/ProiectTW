const mysql = require('mariadb');

const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'ASUS',
  password: 'parola123',
  database: 'proiecttw',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;