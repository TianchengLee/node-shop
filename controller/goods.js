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
        res.sendSucc('获取商品一级分类列表数据成功!', result)
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

    const getGoodsListSql = `SELECT g.id, g.name, g.cover_img, g.description, g.discount_info, g.price, g.sale_price, g.stock, g.sale_count, g.ctime
                        FROM goods g
                        LEFT JOIN goods_color gc
                        ON g.id = gc.gid
                        LEFT JOIN goods_size gs
                        ON g.id = gs.gid
                        LEFT JOIN goods_img gp
                        ON g.id = gp.gid
                        ${queryCondition}
                        GROUP BY g.id
                        LIMIT ?, ?;
                        SELECT COUNT(*) AS count
                        FROM goods as g
                        ${queryCondition}`

    sqlExcute(getGoodsListSql, queryParams)
      .then(result => {
        result[0].forEach(item => {
          item.color && (item.color = item.color.split(','))
          item.size && (item.size = item.size.split(','))
          item.small_img && (item.small_img = item.small_img.split(','))
          item.big_img && (item.big_img = item.big_img.split(','))
        })
        res.sendSucc('获取商品列表成功!', { goods: result[0], totalCount: result[1][0].count })
      })
  },
  getGoodsInfoAction(req, res) {
    if (!req.checkFormBody(['id'], res)) return

    const getGoodsInfoSql = `SELECT g.id, g.name, g.description, g.discount_info, g.content, g.price, g.sale_price, g.stock, g.sale_count, g.ctime, GROUP_CONCAT(distinct gc.color) AS color, GROUP_CONCAT(distinct gs.size) AS size, GROUP_CONCAT(distinct gp.small_img) AS small_img, GROUP_CONCAT(distinct gp.big_img) AS big_img
                            FROM goods g
                            LEFT JOIN goods_color gc
                            ON g.id = gc.gid
                            LEFT JOIN goods_size gs
                            ON g.id = gs.gid
                            LEFT JOIN goods_img gp
                            ON g.id = gp.gid
                            WHERE g.id = ?
                            GROUP BY g.id
                            LIMIT 0, 1`

    sqlExcute(getGoodsInfoSql, req.params.id)
      .then(result => {
        let goodsInfo = result[0]
        goodsInfo.color && (goodsInfo.color = goodsInfo.color.split(','))
        goodsInfo.size && (goodsInfo.size = goodsInfo.size.split(','))
        goodsInfo.small_img && (goodsInfo.small_img = goodsInfo.small_img.split(','))
        goodsInfo.big_img && (goodsInfo.big_img = goodsInfo.big_img.split(','))
        res.sendSucc('获取商品详情成功!', goodsInfo)
      })
  }
}