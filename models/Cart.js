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

module.exports = Cart