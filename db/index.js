const mysql = require('mysql');
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'shop',
  multipleStatements: true
})

module.exports = (sql, data) => {
  return new Promise((resovle, reject) => {
    conn.query(sql, data, (err, result) => {
      if (err) reject(err)
      resovle(result)
    })
  })
}