
// const mysql2 = require('mysql2')

// const pool = mysql2.createPool({
//   user: 'D4_89846_Srushti',
//   host : 'localhost',
//   password:'manager',
//   database:'hackathon_blog'
// })


const mysql2 = require('mysql2')
const pool = mysql2.createConnection({
    user: 'root',
    password: 'vjeet',
    database: 'blogs_db',
    host: 'localhost'

})

module.exports = pool