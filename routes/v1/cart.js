const express = require('express');
const router = express.Router();
const ctrl = require('../../controller')

/**
 * @api {post} /v1/cart/postGoodsToCart/:id 添加商品到购物车(需要token)
 * @apiDescription 添加商品到购物车
 * @apiName postGoodsToCart
 * @apiGroup 7.Shopping-Cart
 * @apiHeader {string} Authorization token
 * @apiParam {number} id 将指定id的商品添加到购物车
 * @apiParam {number} count 要添加到购物车的商品数量
 * @apiSuccess {number} status 状态码
 * @apiSuccess {json} data 商品列表数据
 * @apiSuccess {string} succMsg 成功消息
 * @apiSuccess {string} succMsg 错误消息
 * @apiSuccessExample {json} Success-Response:
 * {
    "status": 200,
    "data": null,
    "succMsg": "添加购物车成功!",
    "errMsg": null
  }
 * @apiSampleRequest /v1/cart/postGoodsToCart/:id
 * @apiVersion 1.0.0
 */
router.post('/postGoodsToCart/:id', ctrl.cart.postGoodsToCart)

module.exports = router;
