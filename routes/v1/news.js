const express = require('express');
const router = express.Router();
const ctrl = require('../../controller')

/**
 * @api {get} /v1/news/getNews 获取新闻信息
 * @apiDescription 获取新闻信息
 * @apiName getNews
 * @apiGroup 4.News-Info
 * @apiParam {string} [keys] 搜索关键字,不传表示获取所有
 * @apiParam {string} [cate] 分类id,不传表示获取所有新闻,权重高于keys,如果传入cate则不会进行搜索关键字
 * @apiParam {number} page 页码数
 * @apiParam {number} pageSize 每页条数
 * @apiSuccess {number} status 状态码
 * @apiSuccess {json} data 数据
 * @apiSuccess {string} succMsg 成功消息
 * @apiSuccess {string} succMsg 错误消息
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "status": 200,
 *   "data": {
 *       "news": [
 *           {
 *               "id": 4,
 *               "title": "Air Jordan 33开箱评测",
 *               "icon": "https://m.360buyimg.com/mobilecms/s460x300_jfs/t1/16507/37/1544/110289/5c1375b3Ed5618e9d/9b7c529ff53205f7.jpg!q70.jpg",
 *               "description": "AIR JORDAN正代系列近两年一直走复古路线，31代和32代分别添加1代和2代设计元素，而当33代推出时大家第一时间是比较蒙圈的，因为设计确实相当超前。采用了*FastFit 技术，简单地拉起位于鞋面的扣环，便会带动系统收紧缆线，实现从脚踝到前掌的360度全方位锁定。我们来看看这款鞋的具体细节。",
 *               "views": 0
 *          }
 *      ],
 *      "totalCount": 3
 *  },
 *  "succMsg": "获取新闻列表数据成功!",
 *  "errMsg": null
 *}
 * @apiSampleRequest /v1/news/getNews
 * @apiVersion 1.0.0
 */
router.get('/getNews', ctrl.news.getNewsAction)

/**
 * @api {get} /v1/news/getNewsCategories 获取新闻分类列表
 * @apiDescription 获取新闻分类列表
 * @apiName getNewsCategories
 * @apiGroup 4.News-Info
 * @apiSuccess {number} status 状态码
 * @apiSuccess {json} data 分类列表
 * @apiSuccess {string} succMsg 成功消息
 * @apiSuccess {string} succMsg 错误消息
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "status": 200,
 *   "data":  [
 *       {
 *           "id": 1,
 *           "name": "精选"
 *       },
 *       {
 *           "id": 2,
 *           "name": "手机"
 *       },
 *       {
 *           "id": 3,
 *           "name": "数码"
 *       },
 *       {
 *           "id": 4,
 *           "name": "汽车"
 *       },
 *       {
 *           "id": 5,
 *           "name": "运动"
 *       },
 *       {
 *           "id": 6,
 *           "name": "型男"
 *       }
 *   ],
 *  "succMsg": "获取新闻分类列表成功!",
 *  "errMsg": null
 *}
 * @apiSampleRequest /v1/news/getNewsCategories
 * @apiVersion 1.0.0
 */
router.get('/getNewsCategories', ctrl.news.getNewsCategoriesAction)

module.exports = router;
