const sqlExcute = require('../db')
const moment = require('moment')

const getGoodsCategoriesSql = `SELECT * FROM goods_cate`
const getGoodsSubCategoriesSql = `SELECT id, name, icon 
                                  FROM goods_sub_cate
                                  LIMIT ?, ?;
                                  SELECT COUNT(*) AS count
                                  FROM goods_sub_cate`

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
  }
}