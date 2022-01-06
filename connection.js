var mysql = require('mysql')
const util = require('util')

var con = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "M@rlon123",
    database: "Ligue",
    connectTimeout: 60000,
});

// Ping database to check for common exception errors.
con.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.')
        } else {
            console.error(err.code)
        }
    } else {
        console.log("Db Connection: Ok")
    }

    if (connection) connection.release()

    return
})

// Promisify for Node.js async/await.
con.query = util.promisify(con.query)

module.exports = con