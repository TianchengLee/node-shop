const express = require('express');
const router = express.Router();
const ctrl = require('../../controller')

/**
 * @api {get} /v1/goods/getGoodsCategories 获取商品分类列表信息
 * @apiDescription 获取商品分类列表信息
 * @apiName getGoodsCategories
 * @apiGroup 5.Goods-Info
 * @apiSuccess {number} status 状态码
 * @apiSuccess {json} data 分类数据
 * @apiSuccess {string} succMsg 成功消息
 * @apiSuccess {string} succMsg 错误消息
 * @apiSuccessExample {json} Success-Response:
 * {
    "status": 200,
    "data": [
        {
            "id": 1,
            "name": "时尚"
        },
        {
            "id": 2,
            "name": "男装"
        },
        {
            "id": 3,
            "name": "女装"
        },
        {
            "id": 4,
            "name": "男鞋"
        },
        {
            "id": 5,
            "name": "女鞋"
        },
        {
            "id": 6,
            "name": "箱包手袋"
        },
        {
            "id": 7,
            "name": "手机数码"
        },
        {
            "id": 8,
            "name": "电脑办公"
        },
        {
            "id": 9,
            "name": "家用电器"
        },
        {
            "id": 10,
            "name": "生鲜食品"
        }
      ],
      "succMsg": "获取商品分类列表数据成功",
      "errMsg": null
  }
 * @apiSampleRequest /v1/goods/getGoodsCategories
 * @apiVersion 1.0.0
 */
router.get('/getGoodsCategories', ctrl.goods.getGoodsCategoriesAction)

module.exports = router;
