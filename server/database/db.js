const mysql2 = require('mysql2')
const pool = mysql2.createConnection({
    user: 'D4_89846_Srushti',
    password: 'manager',
    database: 'hackathon_blog',
    host: 'localhost'

})
module.exports = pool