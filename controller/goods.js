const sqlExcute = require('../db')
const moment = require('moment')

const getGoodsCategoriesSql = `SELECT * FROM goods_cate`

module.exports = {
  getGoodsCategoriesAction(req, res) {
    sqlExcute(getGoodsCategoriesSql)
      .then(result => {
        res.sendSucc('获取商品分类列表数据成功', result)
      })
  }
}