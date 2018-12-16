const sqlExcute = require('../db')

const getNewsSql = `SELECT id, title, icon, description, content, views 
                    FROM news
                    WHERE del_state = 0
                    LIMIT ?, ?;
                    SELECT COUNT(*) as count 
                    FROM news
                    WHERE del_state = 0`

const getNewsSqlByKeys = `SELECT id, title, icon, description, content, views 
                          FROM news
                          WHERE del_state = 0
                          AND CONCAT(title, description, content) LIKE ?
                          LIMIT ?, ?;
                          SELECT COUNT(*) as count 
                          FROM news
                          WHERE del_state = 0
                          AND CONCAT(title, description, content) LIKE ?`

function checkNewsSql(req) {
  if (req.query.keys) {
    return sqlExcute(getNewsSqlByKeys, ['%' + req.query.keys + '%', req.query.page - 1, parseInt(req.query.pageSize), '%' + req.query.keys + '%'])
  } else {
    return sqlExcute(getNewsSql, [req.query.page - 1, parseInt(req.query.pageSize)])
  }
}

module.exports = {
  getNewsAction(req, res) {

    const attrs = ['page', 'pageSize']
    if (!req.checkFormBody(attrs, res)) return

    // sqlExcute(getNewsSql, [req.query.page - 1, parseInt(req.query.pageSize)])
    checkNewsSql(req)
      .then(result => {
        // console.log(result[0])
        // console.log(result[1])
        res.sendSucc('获取新闻数据成功!', { news: result[0], totalCount: result[1][0].count })
      })
      .catch(e => {
        res.sendErr(400, e.message)
      })
  }
}