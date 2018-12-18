const express = require('express');
const router = express.Router();
const ctrl = require('../../controller')

/**
 * @api {get} /v1/goods/getGoodsCategories 获取商品一级分类列表信息
 * @apiDescription 获取商品一级分类列表信息
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
      "succMsg": "获取商品一级分类列表数据成功",
      "errMsg": null
  }
 * @apiSampleRequest /v1/goods/getGoodsCategories
 * @apiVersion 1.0.0
 */
router.get('/getGoodsCategories', ctrl.goods.getGoodsCategoriesAction)

/**
 * @api {get} /v1/goods/getGoodsSubCategories 获取商品所有二级分类列表信息
 * @apiDescription 获取商品所有二级分类列表信息
 * @apiName getGoodsSubCategories
 * @apiGroup 5.Goods-Info
 * @apiParam {number} page 页码数
 * @apiParam {number} pageSize 每页条数
 * @apiSuccess {number} status 状态码
 * @apiSuccess {json} data 分类数据
 * @apiSuccess {string} succMsg 成功消息
 * @apiSuccess {string} succMsg 错误消息
 * @apiSuccessExample {json} Success-Response:
 * {
    "status": 200,
    "data": {
        "cates": [
            {
                "id": 1,
                "name": "周大福",
                "icon": ""
            },
            {
                "id": 2,
                "name": "周生生",
                "icon": ""
            },
            {
                "id": 3,
                "name": "GUCCI",
                "icon": ""
            },
            {
                "id": 4,
                "name": "FENDI",
                "icon": ""
            },
            {
                "id": 5,
                "name": "BOSS",
                "icon": ""
            }
        ],
        "totalCount": 83
    },
    "succMsg": "获取商品所有二级分类数据成功!",
    "errMsg": null
  }
 * @apiSampleRequest /v1/goods/getGoodsSubCategories
 * @apiVersion 1.0.0
 */
router.get('/getGoodsSubCategories', ctrl.goods.getGoodsSubCategoriesAction)

/**
 * @api {get} /v1/goods/getGoodsSubCategories/:id 获取指定的二级分类列表信息
 * @apiDescription 获取指定的二级分类列表信息
 * @apiName getGoodsSubCategoriesById
 * @apiGroup 5.Goods-Info
 * @apiParam {number} id 一级分类id
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
            "name": "周大福",
            "icon": ""
        },
        {
            "id": 2,
            "name": "周生生",
            "icon": ""
        },
        {
            "id": 3,
            "name": "GUCCI",
            "icon": ""
        },
        {
            "id": 4,
            "name": "FENDI",
            "icon": ""
        },
        {
            "id": 5,
            "name": "BOSS",
            "icon": ""
        },
        {
            "id": 6,
            "name": "OMEGA",
            "icon": ""
        },
        {
            "id": 7,
            "name": "TISSOT",
            "icon": ""
        }
    ],
    "succMsg": "获取商品分类数据成功!",
    "errMsg": null
   }
 * @apiSampleRequest /v1/goods/getGoodsSubCategories/:id
 * @apiVersion 1.0.0
 */
router.get('/getGoodsSubCategories/:id', ctrl.goods.getGoodsSubCategoriesByIdAction)

module.exports = router;
