const mysql = require('mysql2')

const pool = mysql.createPool({
  user: 'root',
  host : 'localhost',
  password:'vjeet',
  database:'blogs_db'
})

module.exports = pool