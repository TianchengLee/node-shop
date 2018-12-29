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
 * @apiSuccess {null} data null
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

/**
 * @api {get} /v1/cart/deleteGoodsFromCart/:id 删除购物车中的商品(需要token)
 * @apiDescription 删除购物车中的商品
 * @apiName deleteGoodsFromCart
 * @apiGroup 7.Shopping-Cart
 * @apiHeader {string} Authorization token
 * @apiParam {number} id 指定要删除的商品id
 * @apiSuccess {number} status 状态码
 * @apiSuccess {null} data null
 * @apiSuccess {string} succMsg 成功消息
 * @apiSuccess {string} succMsg 错误消息
 * @apiSuccessExample {json} Success-Response:
 * {
    "status": 200,
    "data": null,
    "succMsg": "删除购物车商品成功!",
    "errMsg": null
  }
 * @apiSampleRequest /v1/cart/deleteGoodsFromCart/:id
 * @apiVersion 1.0.0
 */
router.get('/deleteGoodsFromCart/:id', ctrl.cart.deleteGoodsFromCart)

/**
 * @api {get} /v1/cart/getGoodsFromCart 获取当前用户的购物车信息(需要token)
 * @apiDescription 获取当前用户的购物车信息
 * @apiName getGoodsFromCart
 * @apiGroup 7.Shopping-Cart
 * @apiHeader {string} Authorization token
 * @apiParam {number} page 页码数
 * @apiParam {number} pageSize 每页条数
 * @apiSuccess {number} status 状态码
 * @apiSuccess {json} data 商品列表数据
 * @apiSuccess {string} succMsg 成功消息
 * @apiSuccess {string} succMsg 错误消息
 * @apiSuccessExample {json} Success-Response:
 * {
    "status": 200,
    "data": [
        {
            "id": 100,
            "name": "春夏婴幼儿纱布侧开睡袋70x55（帆船小鱼）袋装，1件/袋",
            "discount_info": "【限时活动】圣诞欢乐颂到手价5折起【满赠】圣诞节全场单笔满338送卫生巾2包，满468送汗巾3条，满658送书籍1本（单笔订单限赠1份）",
            "price": "368",
            "sale_price": "368",
            "stock": 0,
            "sale_count": 2525,
            "ctime": "2018-12-24 22:47:16",
            "count": 1,
            "small_img": "https://res.purcotton.com//images/commodity/002001002/80000000/002000000596/10000001_00000559/05C427D668A3FF7272DB9631FAB82DB7.jpg_100x100.jpg,https://res.purcotton.com//images/commodity/002001002/80000000/002000000596/10000001_00000559/51C4A2F683F3C2C81C40101C7FEC8059.jpg_100x100.jpg,https://res.purcotton.com//images/commodity/002001002/80000000/002000000596/10000001_00000559/B9612C9D301F1E7248CEE657A1C59125.jpg_100x100.jpg,https://res.purcotton.com//images/commodity/002001002/80000000/002000000596/10000001_00000559/5A60CFE0505855A94B5B820AB7A48A87.jpg_100x100.jpg,https://res.purcotton.com//images/commodity/002001002/80000000/002000000596/10000001_00000559/C6B7095789B0AC22E188D3C4378E8AEF.jpg_100x100.jpg"
        }
    ],
    "succMsg": "获取购物车商品信息成功!",
    "errMsg": null
  }
 * @apiSampleRequest /v1/cart/getGoodsFromCart
 * @apiVersion 1.0.0
 */
router.get('/getGoodsFromCart', ctrl.cart.getGoodsFromCart)

module.exports = router;
