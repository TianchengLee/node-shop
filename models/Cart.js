const Sequelize = require('sequelize')
const sequelize = require('../db/db')
const Cart = sequelize.define('shopping_cart', {
  goods_id: Sequelize.INTEGER,
  user_id: Sequelize.INTEGER,
  count: Sequelize.INTEGER,
}, {
    timestamps: true,
    createdAt: false,
    updatedAt: 'utime',
    freezeTableName: true,
  })

Cart.addGoods = function (goodsInfo, callback) {
  let { goods_id, user_id, count } = goodsInfo
  Cart.findOrCreate({
    where: {
      goods_id,
      user_id
    },
    defaults: goodsInfo
  })
    .spread((result, created) => {
      if (created) return callback(created)
      let cartInfo = result.dataValues
      cartInfo.count = count
      return Cart.update(cartInfo, {
        where: {
          id: cartInfo.id
        }
      })
    })
    .then(result => {
      callback(true)
    })
    .catch(err => {
      callback(null, err)
    })
}

module.exports = Cart