const sqlExcute = require('../db')
const moment = require('moment')

const getNewsSql = `SELECT id, title, ctime, icon, description, views 
                    FROM news
                    WHERE del_state = 0
                    LIMIT ?, ?;
                    SELECT COUNT(*) as count 
                    FROM news
                    WHERE del_state = 0`

const getNewsByKeysSql = `SELECT id, title, ctime, icon, description, views 
                          FROM news
                          WHERE del_state = 0
                          AND CONCAT(title, description, content) LIKE ?
                          ORDER BY ctime desc
                          LIMIT ?, ?;
                          SELECT COUNT(*) as count 
                          FROM news
                          WHERE del_state = 0
                          AND CONCAT(title, description, content) LIKE ?`

const getNewsByCategoriesSql = `SELECT id, title, ctime, icon, description, views 
                          FROM news
                          WHERE del_state = 0
                          AND cate_id = ?
                          ORDER BY ctime desc
                          LIMIT ?, ?;
                          SELECT COUNT(*) as count 
                          FROM news
                          WHERE del_state = 0
                          AND cate_id = ?`

const getNewsInfoByIdSql = `SELECT id, title, ctime, icon, description, content views
                            FROM news
                            WHERE del_state = 0
                            AND id = ?
                            LIMIT 0, 1`

const getNewsCategoriesSql = `SELECT * FROM news_cate`

const getCommentListSql = `SELECT nc.id, nc.comment, nc.user_id, nc.ctime, u.nickname
                          FROM news_comment as nc
                          LEFT JOIN users as u
                          ON u.id = nc.user_id
                          WHERE del_state = 0
                          AND news_id = ?
                          ORDER BY nc.ctime desc
                          LIMIT ?, ?;
                          SELECT COUNT(*) as count 
                          FROM news_comment
                          WHERE del_state = 0
                          AND news_id = ?`

const postCommentSql = `INSERT INTO news_comment SET ?`
function checkNewsSql(req) {

  const pageSize = parseInt(req.query.pageSize)

  if ('cate' in req.query) {
    return sqlExcute(getNewsByCategoriesSql, [req.query.cate, (req.query.page - 1) * pageSize, pageSize, req.query.cate])
  }

  if (req.query.keys) {
    return sqlExcute(getNewsByKeysSql, ['%' + req.query.keys + '%', (req.query.page - 1) * pageSize, pageSize, '%' + req.query.keys + '%'])
  }

  return sqlExcute(getNewsSql, [(req.query.page - 1) * pageSize, pageSize])
}

module.exports = {
  getNewsListAction(req, res) {

    const attrs = ['page', 'pageSize']
    if (!req.checkFormBody(attrs, res)) return

    // sqlExcute(getNewsSql, [req.query.page - 1, parseInt(req.query.pageSize)])
    checkNewsSql(req)
      .then(result => {
        // console.log(result[0])
        // console.log(result[1])
        res.sendSucc('获取新闻列表数据成功!', { news: result[0], totalCount: result[1][0].count })
      })
      .catch(e => {
        res.sendErr(400, e.message)
      })
  },
  getNewsCategoriesAction(req, res) {
    sqlExcute(getNewsCategoriesSql)
      .then(result => {
        res.sendSucc('获取新闻分类列表成功!', result)
      })
      .catch(e => {
        res.sendErr(400, e.message)
      })
  },
  getNewsInfoAction(req, res) {
    const newsId = parseInt(req.params.id)
    if (!newsId) return res.sendErr(400, '请传入正确的新闻Id!')
    sqlExcute(getNewsInfoByIdSql, newsId)
      .then(result => {
        res.sendSucc('获取新闻详情成功!', result[0])
      })
      .catch(e => {
        res.sendErr(400, e.message)
      })
  },
  getCommentListAction(req, res) {
    if (!req.checkFormBody(['id', 'page', 'pageSize'], res)) return

    const pageSize = parseInt(req.query.pageSize)
    sqlExcute(getCommentListSql, [req.params.id, (req.query.page - 1) * pageSize, pageSize, req.params.id])
      .then(result => {
        res.sendSucc('获取评论列表成功!', { comments: result[0], totalCount: result[1][0].count })
      })
      .catch(e => {
        res.sendErr(400, e.message)
      })
  },
  postCommentAction(req, res) {
    if (!req.checkFormBody(['id', 'comment'], res)) reutrn

    const comment = req.body.comment
    const news_id = req.params.id
    const user_id = req.userInfo.id
    const ctime = moment().format('YYYY-MM-DD HH:mm:ss')

    sqlExcute(getNewsInfoByIdSql, news_id)
      .then(result => {
        if (result.length > 0) return sqlExcute(postCommentSql, { comment, ctime, news_id, user_id })
      })
      .then(result => {
        if (!result) throw new Error('新闻信息不存在!请传入正确的新闻id!')
        res.sendSucc('发表评论成功!')
      })
      .catch(e => {
        res.sendErr(400, e.message)
      })
  }
}