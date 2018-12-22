const sqlExcute = require('../db')
const getUserInfoByTokenSql = `SELECT u.id, u.username, u.mobile, ua.token
                              FROM users AS u 
                              LEFT JOIN users_auth AS ua 
                              ON u.id = ua.user_id 
                              WHERE token = ?
                              ORDER BY ua.ctime DESC`

module.exports = {
  getUserInfo(req, res, next) {
    sqlExcute(getUserInfoByTokenSql, req.headers.authorization)
      .then(result => {
        req.userInfo = result[0]
        next()
      }, err => {
        next()
      })
      .catch(e => {
        next()
      })
  },
}