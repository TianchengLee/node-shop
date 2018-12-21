const Cart = require('../models/Cart')

module.exports = {
  postGoodsToCart(req, res) {
    if (!req.checkFormBody(['id', 'count'], res)) return
    const goods_id = parseInt(req.params.id)
    const user_id = parseInt(req.userInfo.id)
    const count = parseInt(req.body.count)

    Cart.findOrCreate({
      where: {
        goods_id,
        user_id
      },
      defaults: {
        goods_id,
        user_id,
        count
      }
    })
      .spread((result, created) => {
        if (created) return res.sendSucc('添加购物车成功!')
        let cartInfo = result.dataValues
        cartInfo.count += count
        return Cart.update(cartInfo, {
          where: {
            id: cartInfo.id
          }
        })
      })
      .then(result => {
        res.sendSucc('添加购物车成功!')
      })
  }
}