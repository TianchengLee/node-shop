const sqlExcute = require('../db')
const moment = require('moment')

const getGoodsCategoriesSql = `SELECT id, name FROM goods_cate WHERE p_cate_id IS NULL`
const getGoodsSubCategoriesSql = `SELECT id, name
                                  FROM goods_cate
                                  WHERE p_cate_id IS NOT NULL
                                  LIMIT ?, ?;
                                  SELECT COUNT(*) AS count
                                  FROM goods_cate
                                  WHERE p_cate_id IS NOT NULL`
const getGoodsSubCategoriesByIdSql = `SELECT id, name 
                                      FROM goods_cate
                                      WHERE p_cate_id = ?`

module.exports = {
  getGoodsCategoriesAction(req, res) {
    sqlExcute(getGoodsCategoriesSql)
      .then(result => {
        res.sendSucc('获取商品分类列表数据成功!', result)
      })
  },
  getGoodsSubCategoriesAction(req, res) {
    if (!req.checkFormBody(['page', 'pageSize'], res)) return
    const pageSize = parseInt(req.query.pageSize)
    sqlExcute(getGoodsSubCategoriesSql, [(req.query.page - 1) * pageSize, pageSize])
      .then(result => {
        res.sendSucc('获取商品所有二级分类数据成功!', { cates: result[0], totalCount: result[1][0].count })
      })
  },
  getGoodsSubCategoriesByIdAction(req, res) {
    const cateId = parseInt(req.params.id)
    sqlExcute(getGoodsSubCategoriesByIdSql, cateId)
      .then(result => {
        res.sendSucc('获取商品分类数据成功!', result)
      })
  },
  getGoodsListAction(req, res) {
    if (!req.checkFormBody(['page', 'pageSize'], res)) return

    // 分页参数
    const pageSize = parseInt(req.query.pageSize)
    let queryParams = [(req.query.page - 1) * pageSize, pageSize]

    // 分类条件
    let queryCondition = ``

    // 检测是否有需要分类查询
    if (req.checkFormBody(['cateId'])) {
      queryCondition = `WHERE g.cate_id = ?
                        OR g.sub_cate_id = ?`
      let cateArr = [req.query.cateId, req.query.cateId]
      // 拼接6个问号的查询参数
      queryParams = cateArr.concat(queryParams).concat(cateArr)
    }

    const getGoodsListSql = `SELECT g.id, g.name, g.description, g.discount_info, g.content, g.price, g.sale_price, g.kucun, g.sale_count, g.ctime, GROUP_CONCAT(distinct gc.color) AS color, GROUP_CONCAT(distinct gs.size) AS size, GROUP_CONCAT(distinct gp.small_pic) AS small_pic, GROUP_CONCAT(distinct gp.big_pic) AS big_pic
                        FROM goods g
                        LEFT JOIN goods_color gc
                        ON g.id = gc.gid
                        LEFT JOIN goods_size gs
                        ON g.id = gs.gid
                        LEFT JOIN goods_pic gp
                        ON g.id = gp.gid
                        ${queryCondition}
                        GROUP BY g.id
                        LIMIT ?, ?;
                        SELECT COUNT(*) AS count
                        FROM goods as g
                        ${queryCondition}`

    sqlExcute(getGoodsListSql, queryParams)
      .then(result => {
        result.forEach(item => {
          item.color && (item.color = item.color.split(','))
          item.size && (item.size = item.size.split(','))
          item.small_pic && (item.small_pic = item.small_pic.split(','))
          item.big_pic && (item.big_pic = item.big_pic.split(','))
        })
        res.sendSucc('获取商品列表成功!', { goods: result[0], totalCount: result[1][0].count })
      })
  }
}