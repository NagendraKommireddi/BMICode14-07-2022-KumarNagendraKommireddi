
const mysqlconfig = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '12345678',
  database: 'test',
  connectionLimit: 500,
  multipleStatements: true,
  namedPlaceholders: true
}

const pool = require('mysql2').createPool(mysqlconfig)
const mysqlexport = {
  query (query, params, callback) {
    pool.getConnection((err, conn) => {
      if (err != null) {
        if (conn != null) {
          conn.release()
        }
        if (callback != null) {
          return callback('DB error')
        }
      }
      conn.query(query, params, (_err, rows) => {
        if (_err != null) {
          console.log(err);
        }
        conn.release()
        if (callback != null) {
          return callback(_err, rows)
        }
      })
    })
  },
  end (callback) {
    pool.end(callback)
  }
}
module.exports = mysqlexport
