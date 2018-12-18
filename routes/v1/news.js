const express = require('express');
const router = express.Router();
const ctrl = require('../../controller')

/**
 * @api {get} /v1/news/getNewsList 获取新闻列表信息
 * @apiDescription 获取新闻列表信息
 * @apiName getNewsList
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
 * @apiSampleRequest /v1/news/getNewsList
 * @apiVersion 1.0.0
 */
router.get('/getNewsList', ctrl.news.getNewsListAction)

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

/**
 * @api {get} /v1/news/getNewsInfo/:id 获取新闻详情
 * @apiDescription 获取新闻详情
 * @apiName getNewsInfo
 * @apiGroup 4.News-Info
 * @apiParam {number} id 新闻id
 * @apiSuccess {number} status 状态码
 * @apiSuccess {json} data 分类列表
 * @apiSuccess {string} succMsg 成功消息
 * @apiSuccess {string} succMsg 错误消息
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "status": 200,
 *   "data":  {
        "id": 1,
        "title": "华为旗舰从4199到800也没人买？用户：老余贼尴尬！",
        "icon": "https://m.360buyimg.com/mobilecms/s460x300_jfs/t1/7963/22/8242/69293/5c0b8ed6Eece81a99/826842f8f0dbe29d.jpg!q70.jpg",
        "description": "华为手机从曾经的“中华酷联”时代到现在的“华米OV”时代，一步步走向了国产大哥的存在。如今的华为旗下的产品受到了国内外手机用户的认可，在通讯技术上也有了不小的成就。这都得益于这些年来华为在技术研发上的巨大投入和努力，才有了今天的这些成果。但是价值提升了，华为的手机也越来越贵了。",
        "views": "<div class=\"_3DxVSWjoqsghQdmNPYtFxK _2RXg7l_BWEMqTnH7z_3eXh\"><div class=\"_6KXjmZXt4URp4NonrOWFB\"><div class=\"_2HOCMwa4f5nu5ghetrumiN\"><div class=\"_2CD7_2MZBYElpXw5FMiwuK\"><h3 clstag=\"newstxt|main_a\">华为旗舰从4199到800也没人买？用户：老余贼尴尬！</h3></div><div class=\"undefined\"><div class=\"undefined\"><div class=\"_3VbmUI3ZuVpoS7-YNYXcJo c7DNzkcG7rbA6gFkZPklM zG7SQS_t1_Jg1IV2xtbo_\"><img src=\"//m.360buyimg.com/mobilecms/jfs/t17707/53/1797412963/89469/822356b1/5ad5d1a5N5cb28cbb.jpg!q70.jpg\" data-lazy-src=\"//m.360buyimg.com/mobilecms/jfs/t17707/53/1797412963/89469/822356b1/5ad5d1a5N5cb28cbb.jpg!q70.jpg\" class=\"_1ly13xh54Zg8BuvNqyKAZW\" alt=\"加载图\"></div><div class=\"_3Z3585d03aL1refvDecItG\">MrSix</div></div></div></div></div><div class=\"yCtYoR9aaUJ6gLLeZpGlr\"><p class=\"_1KzSpgz7dV2fQi0DA7rBNO ekdgpaS7Doc3bGdSvcWwK\">华为手机从曾经的“中华酷联”时代到现在的“华米OV”时代，一步步走向了国产大哥的存在。如今的华为旗下的产品受到了国内外手机用户的认可，在通讯技术上也有了不小的成就。这都得益于这些年来华为在技术研发上的巨大投入和努力，才有了今天的这些成果。但是价值提升了，华为的手机也越来越贵了。</p><div class=\"_1KzSpgz7dV2fQi0DA7rBNO _37gzSu5Hae3LGdP4jdoYRh\"><div class=\"_3VbmUI3ZuVpoS7-YNYXcJo c7DNzkcG7rbA6gFkZPklM\"><img src=\"//m.360buyimg.com/mobilecms/s1026x739_jfs/t1/28214/33/641/79054/5c0b8ef2E6b62b1ef/9388db85f1d9dc68.jpg!q70.jpg\" data-lazy-src=\"//m.360buyimg.com/mobilecms/s1026x739_jfs/t1/28214/33/641/79054/5c0b8ef2E6b62b1ef/9388db85f1d9dc68.jpg!q70.jpg\" class=\"_1ly13xh54Zg8BuvNqyKAZW\" alt=\"加载图\" clstag=\"newstxt|main_c01\"></div></div><p class=\"_1KzSpgz7dV2fQi0DA7rBNO ekdgpaS7Doc3bGdSvcWwK\">都说从前没钱买华为，现在还是没钱买华为，因为现在的华为旗舰确实变贵了。华为从一开始走的就是高端路线，针对的目标用户是高端商务人群，所以手机一开始就不算是很便宜，现在质量性能和外观都提升了，高端品牌有溢价也是正常的。</p><div class=\"_1KzSpgz7dV2fQi0DA7rBNO _37gzSu5Hae3LGdP4jdoYRh\"><div class=\"_3VbmUI3ZuVpoS7-YNYXcJo c7DNzkcG7rbA6gFkZPklM\"><img src=\"//m.360buyimg.com/mobilecms/s1026x684_jfs/t1/27349/9/688/93898/5c0b8f02E9e3b0950/fd84296cd0e51d7d.jpg!q70.jpg\" data-lazy-src=\"//m.360buyimg.com/mobilecms/s1026x684_jfs/t1/27349/9/688/93898/5c0b8f02E9e3b0950/fd84296cd0e51d7d.jpg!q70.jpg\" class=\"_1ly13xh54Zg8BuvNqyKAZW\" alt=\"加载图\" clstag=\"newstxt|main_c02\"></div></div><p class=\"_1KzSpgz7dV2fQi0DA7rBNO ekdgpaS7Doc3bGdSvcWwK\">虽然现在的华为手机变贵了，但销量上并不少，可见除了目标用户，其他的很多消费者也都认可了华为。对溢价的宽容是因为华为的旗舰机性能确实强，质量对得起价格，比如今年的Mate20系列，还有P20系列，在性能配置和外观设计方面都是顶级旗舰的水准。</p><div class=\"_1KzSpgz7dV2fQi0DA7rBNO _37gzSu5Hae3LGdP4jdoYRh\"><div class=\"_3VbmUI3ZuVpoS7-YNYXcJo c7DNzkcG7rbA6gFkZPklM\"><img src=\"//m.360buyimg.com/mobilecms/jfs/t1/28285/36/670/169637/5c0b8f13E705582c8/6bdf5f9029e4356f.jpg!q70.jpg\" data-lazy-src=\"//m.360buyimg.com/mobilecms/jfs/t1/28285/36/670/169637/5c0b8f13E705582c8/6bdf5f9029e4356f.jpg!q70.jpg\" class=\"_1ly13xh54Zg8BuvNqyKAZW\" alt=\"加载图\" clstag=\"newstxt|main_c03\"></div></div><p class=\"_1KzSpgz7dV2fQi0DA7rBNO ekdgpaS7Doc3bGdSvcWwK\">但凡事总有例外，华为的旗舰也不是每一款都物有所值，也不是每一款消费者都能容忍它的高价，比如在2015年的9月份上市的华为MateS。这款手机的上市价是4199元，但是现在跌到了949元，但是尽管跌到了百元机的价位，但是却依然没人乐意买了用。</p><div class=\"_1KzSpgz7dV2fQi0DA7rBNO _37gzSu5Hae3LGdP4jdoYRh\"><div class=\"_3VbmUI3ZuVpoS7-YNYXcJo c7DNzkcG7rbA6gFkZPklM\"><img src=\"//m.360buyimg.com/mobilecms/s800x600_jfs/t1/24727/1/662/250046/5c0b8f22E96629a77/ef5772789d750b1a.jpg!q70.jpg\" data-lazy-src=\"//m.360buyimg.com/mobilecms/s800x600_jfs/t1/24727/1/662/250046/5c0b8f22E96629a77/ef5772789d750b1a.jpg!q70.jpg\" class=\"_1ly13xh54Zg8BuvNqyKAZW\" alt=\"加载图\" clstag=\"newstxt|main_c04\"></div></div><p class=\"_1KzSpgz7dV2fQi0DA7rBNO ekdgpaS7Doc3bGdSvcWwK\">华为MateS搭载的是麒麟935处理器，3+64G内存醋和，采用的是5.5英寸的2.5D弧面显示屏，外观上还是以前华为旗舰的风格，满满的商务风。另外，这款手机在拍照功能上采用的是前置800万，后置1300万单摄，虽然不强，但是对于当时来讲还算不错，这款手机还采用了升级版指纹识别，解锁更快。</p><div class=\"_1KzSpgz7dV2fQi0DA7rBNO _37gzSu5Hae3LGdP4jdoYRh\"><div class=\"_3VbmUI3ZuVpoS7-YNYXcJo c7DNzkcG7rbA6gFkZPklM\"><img src=\"//m.360buyimg.com/mobilecms/s1026x660_jfs/t1/25059/28/621/181809/5c0b8f32E92c181e8/85b556231d4d7f37.jpg!q70.jpg\" data-lazy-src=\"//m.360buyimg.com/mobilecms/s1026x660_jfs/t1/25059/28/621/181809/5c0b8f32E92c181e8/85b556231d4d7f37.jpg!q70.jpg\" class=\"_1ly13xh54Zg8BuvNqyKAZW\" alt=\"加载图\" clstag=\"newstxt|main_c05\"></div></div><p class=\"_1KzSpgz7dV2fQi0DA7rBNO ekdgpaS7Doc3bGdSvcWwK\">这款手机在当时算是不错的，但是现在的华为不是三年前的华为能比的，不管是品牌影响力还是手机的知名度，4199元的价格确实有点高了。这款手机的定价让它成为了华为最尴尬的一款旗舰，15年的时候正是iPhone 6sP开售，两种高端品牌一对比，消费者肯定会倾向于苹果手机一些。</p><div class=\"_1KzSpgz7dV2fQi0DA7rBNO _37gzSu5Hae3LGdP4jdoYRh\"><div class=\"_3VbmUI3ZuVpoS7-YNYXcJo c7DNzkcG7rbA6gFkZPklM\"><img src=\"//m.360buyimg.com/mobilecms/s1026x631_jfs/t1/24442/37/662/148910/5c0b8f42E5b9cf618/91d9816ba2cee1f2.jpg!q70.jpg\" data-lazy-src=\"//m.360buyimg.com/mobilecms/s1026x631_jfs/t1/24442/37/662/148910/5c0b8f42E5b9cf618/91d9816ba2cee1f2.jpg!q70.jpg\" class=\"_1ly13xh54Zg8BuvNqyKAZW\" alt=\"加载图\" clstag=\"newstxt|main_c06\"></div></div><p class=\"_1KzSpgz7dV2fQi0DA7rBNO ekdgpaS7Doc3bGdSvcWwK\">很多网友对于这款手机的评价也是一针见血。当时的华为手机是支撑不起这么高的定价的，买的人数可想而知，再看看同期上市的iPhone 6sP，现在的售价还在3000左右，就知道当年的华为手机和苹果差距有多大了，虽然现在已经缩小甚至赶超，但华为还需要再接再厉。</p></div></div>"
    },
 *  "succMsg": "获取新闻详情成功!",
 *  "errMsg": null
 *}
 * @apiSampleRequest /v1/news/getNewsInfo/:id
 * @apiVersion 1.0.0
 */
router.get('/getNewsInfo/:id', ctrl.news.getNewsInfoAction)

module.exports = router;
