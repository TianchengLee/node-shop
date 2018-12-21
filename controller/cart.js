const Cart = require('../models/Cart')

module.exports = {
  postGoodsToCart(req, res) {
    if (!req.checkFormBody(['id', 'count'], res)) return
    const goods_id = parseInt(req.params.id)
    const user_id = parseInt(req.userInfo.id)
    const count = parseInt(req.body.count)

    Cart.addGoods({ goods_id, user_id, count }, (result, err) => {
      if (result) return res.sendSucc('添加购物车成功!')
      else res.sendErr(400, '添加购物车失败!' + err.message)
    })
  },
  deleteGoodsFromCart(req, res) {
    if (!req.checkFormBody(['id'], res)) return
    const goods_id = parseInt(req.params.id)
    const user_id = parseInt(req.userInfo.id)
    Cart.deleteGoods({ goods_id, user_id }, (result, err) => {
      if (result) return res.sendSucc('删除购物车商品成功!')
      else res.sendErr(400, '删除购物车商品失败!' + err.message)
    })
  },
  getGoodsFromCart(req, res) {
    if (!req.checkFormBody(['page', 'pageSize'], res)) return
    const user_id = parseInt(req.userInfo.id)
    const page = parseInt(req.query.page)
    const pageSize = parseInt(req.query.pageSize)
    Cart.getGoods({user_id, page, pageSize}, (result, err) => {
      if (result) return res.sendSucc('获取购物车商品信息成功!', result)
      else res.sendErr(400, '获取购物车商品信息失败!' + err.message)
    })
  }
}