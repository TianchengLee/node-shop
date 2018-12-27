const express = require('express');
const router = express.Router();
const ctrl = require('../../controller')

/**
 * @api {get} /v1/home/getBanners 获取轮播图信息
 * @apiDescription 获取轮播图信息
 * @apiName getBanners
 * @apiGroup 0.Home
 * @apiSuccess {number} status 状态码
 * @apiSuccess {json} data 轮播图列表数据
 * @apiSuccess {string} succMsg 成功消息
 * @apiSuccess {string} succMsg 错误消息
 * @apiSuccessExample {json} Success-Response:
 * {
    "status": 200,
    "data": null,
    "succMsg": "删除购物车商品成功!",
    "errMsg": null
  }
 * @apiSampleRequest /v1/home/getBanners
 * @apiVersion 1.0.0
 */
router.get('/getBanners', ctrl.home.getBanners)

module.exports = router;
