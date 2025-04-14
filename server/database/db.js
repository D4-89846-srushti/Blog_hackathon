
const mysql2 = require('mysql2')

 const pool = mysql2.createPool({

user: 'D4_89846_Srushti',
host : 'localhost',
password:'manager',
database:'hackathon_blog'
})




module.exports = pool