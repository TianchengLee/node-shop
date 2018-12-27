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
    "data": [
      {
        "id": 1,
        "img": "https://res.purcotton.com/activity/2018/12/25/ni/750-380.jpg",
        "ctime": "2018-12-27 17:35:00"
      },
      {
        "id": 2,
        "img": "https://res.purcotton.com/activity/2018/12/13/ychx/750-380.jpg",
        "ctime": "2018-12-27 17:35:00"
      },
      {
        "id": 3,
        "img": "https://res.purcotton.com/activity/2018/12/19/xkmrj/750-380.jpg",
        "ctime": "2018-12-27 17:35:00"
      },
      {
        "id": 4,
        "img": "https://res.purcotton.com/activity/2018/12/21/sr/750-380.jpg",
        "ctime": "2018-12-27 17:35:00"
      }
    ],
    "succMsg": "获取轮播图列表成功!",
    "errMsg": null
  }
 * @apiSampleRequest /v1/home/getBanners
 * @apiVersion 1.0.0
 */
router.get('/getBanners', ctrl.home.getBanners)

module.exports = router;
