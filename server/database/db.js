
const mysql2 = require('mysql2')

 const pool = mysql2.createPool({

user: 'root',
host : 'localhost',
password:'vjeet',
database:'blogs_db'
})




module.exports = pool