const express = require('express');
const router = express.Router();
const ctrl = require('../../controller')

/**
 * @api {get} /v1/goods/getGoodsCategories 获取商品一级分类列表信息
 * @apiDescription 获取商品一级分类列表信息
 * @apiName getGoodsCategories
 * @apiGroup 5.Goods-Category
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
          "name": "婴童"
      },
      {
          "id": 2,
          "name": "女士"
      },
      {
          "id": 3,
          "name": "家居"
      },
      {
          "id": 4,
          "name": "男士"
      }
    ],
    "succMsg": "获取商品分类列表数据成功!",
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
 * @apiGroup 5.Goods-Category
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
            "id": 5,
            "name": "婴童护理"
        },
        {
            "id": 6,
            "name": "婴童卫浴"
        },
        {
            "id": 7,
            "name": "婴童床品"
        },
        {
            "id": 8,
            "name": "婴童服装(0-1岁)"
        },
        {
            "id": 9,
            "name": "婴童服装(1-4岁)"
        }
      ],
      "totalCount": 20
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
 * @apiGroup 5.Goods-Category
 * @apiParam {number} id 一级分类id
 * @apiSuccess {number} status 状态码
 * @apiSuccess {json} data 分类列表数据
 * @apiSuccess {string} succMsg 成功消息
 * @apiSuccess {string} succMsg 错误消息
 * @apiSuccessExample {json} Success-Response:
 * {
    "status": 200,
    "data": [
      {
          "id": 5,
          "name": "婴童护理"
      },
      {
          "id": 6,
          "name": "婴童卫浴"
      },
      {
          "id": 7,
          "name": "婴童床品"
      },
      {
          "id": 8,
          "name": "婴童服装(0-1岁)"
      },
      {
          "id": 9,
          "name": "婴童服装(1-4岁)"
      },
      {
          "id": 10,
          "name": "婴童服装(4岁以上) "
      },
      {
          "id": 11,
          "name": "婴童服饰"
      }
    ],
    "succMsg": "获取商品分类数据成功!",
    "errMsg": null
  }
 * @apiSampleRequest /v1/goods/getGoodsSubCategories/:id
 * @apiVersion 1.0.0
 */
router.get('/getGoodsSubCategories/:id', ctrl.goods.getGoodsSubCategoriesByIdAction)

/**
 * @api {get} /v1/goods/getGoodsList 获取商品列表信息
 * @apiDescription 获取商品列表信息
 * @apiName getGoodsList
 * @apiGroup 6.Goods-Info
 * @apiParam {number} [cateId] 根据分类id获取分类商品列表信息
 * @apiParam {number} page 页码数
 * @apiParam {number} pageSize 每页条数
 * @apiSuccess {number} status 状态码
 * @apiSuccess {json} data 商品列表数据
 * @apiSuccess {string} succMsg 成功消息
 * @apiSuccess {string} succMsg 错误消息
 * @apiSuccessExample {json} Success-Response:
 * {
    "status": 200,
    "data": {
      "goods": [
        {
          "id": 1,
          "name": "婴儿纱布夹棉侧开睡袋90x58cm， 1条装",
          "description": "双层纱布面料，中间100%棉填充，亲肤保暖；袖子可拆卸，伸展更自由。",
          "discount_info": "\r\n【限时活动】圣诞欢乐颂到手价5折起\r\n【满赠】圣诞节全场单笔满338送卫生巾2包，满468送汗巾3条，满658送书籍1本（单笔订单限赠1份）",
          "content": "<div class=\"content\">\r\n\t\t\t\t<div class=\"script-append\">\r\n\t\t\t\t\t<script src=\"https://res.purcotton.com//mres/res/mall/js/commodity/commodity_790.js\"></script><div><img class=\"goods-notice\" style=\"vertical-align:middle;\" src=\"https://res.purcotton.com/base/images/goods-notice-pc.jpg?v=201802110943\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- mc上传商品的具体信息 -->\r\n\t\t\t\t<div class=\"upload\">\r\n\t\t\t\t\t<p>\r\n\t<img alt=\"\" src=\"https://res.purcotton.com//images/commodity/002010009/80000000/002000001384/ckeditor/E63CD5AC361A9B15CDC6B5DE382E5DD9.jpg\"><img alt=\"\" src=\"https://res.purcotton.com//images/commodity/002010009/80000000/002000001384/ckeditor/645834B99E2C16BBF6642E9BFA86B3DE.jpg\"><img alt=\"\" src=\"https://res.purcotton.com//images/commodity/002010009/80000000/002000001384/ckeditor/AC0024704E484B28C897B6A0CFE83199.jpg\"><img alt=\"\" src=\"https://res.purcotton.com//images/commodity/002010009/80000000/002000001384/ckeditor/2F6C7281DB84924802D07A0BBDE9D55A.jpg\"><img alt=\"\" src=\"https://res.purcotton.com//images/commodity/002010009/80000000/002000001384/ckeditor/37BD2AEADB8B6F842BD6263C3F089789.jpg\"><img alt=\"\" src=\"https://res.purcotton.com//images/commodity/002010009/80000000/002000001384/ckeditor/056DC542CE9505A62880BEDE009CDDA7.jpg\"><img alt=\"\" src=\"https://res.purcotton.com//images/commodity/002010009/80000000/002000001384/ckeditor/8E311DBC3E38A89FAD273EE83244F928.jpg\"><img alt=\"\" src=\"https://res.purcotton.com//images/commodity/002010009/80000000/002000001384/ckeditor/16AD3FB6F8978B6DFAFEB75E9D131436.jpg\"><img alt=\"\" src=\"https://res.purcotton.com//images/commodity/002010009/80000000/002000001384/ckeditor/27586CF62EBBF9AB6191F1C96D8C7892.jpg\"><img alt=\"\" src=\"https://res.purcotton.com//images/commodity/002010009/80000000/002000001384/ckeditor/2CFA25A9266FF17B2F0FB2159A168931.jpg\"></p>\r\n\r\n\t\t\t\t</div><!-- upload end -->\r\n\t\t\t</div>",
          "price": "398",
          "sale_price": "398",
          "kucun": 1230,
          "sale_count": 2360,
          "ctime": "2018-12-19 18:30:00",
          "color": "星际呦呦,森林乐章,绿底白树",
          "size": null,
          "small_pic": null,
          "big_pic": null
        },
        {
          "id": 2,
          "name": "幼儿纱布床品7件套件（带被芯）幼儿床适用， 1套装",
          "description": "透气-优质纱布面料， 舒适透气， 让宝宝享受高质量睡眠。",
          "discount_info": "【限时活动】圣诞欢乐颂到手价5折起\r\n【满赠】圣诞节全场单笔满338送卫生巾2包，满468送汗巾3条，满658送书籍1本（单笔订单限赠1份）",
          "content": "<div class=\"content\" style=\"display: block;\">\r\n\t\t\t\t<div class=\"script-append\">\r\n\t\t\t\t\t<script src=\"https://res.purcotton.com//mres/res/mall/js/commodity/commodity_790.js\"></script><div><img class=\"goods-notice\" style=\"vertical-align:middle;\" src=\"https://res.purcotton.com/base/images/goods-notice-pc.jpg?v=201802110943\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- mc上传商品的具体信息 -->\r\n\t\t\t\t<div class=\"upload\">\r\n\t\t\t\t\t<p>\r\n\t<img alt=\"\" src=\"https://res.purcotton.com//images/commodity/002011002/80000000/002000001378/ckeditor/494BCB2D7077F847320FDCDDA83F96AD.jpg\"><img alt=\"\" src=\"https://res.purcotton.com//images/commodity/002011002/80000000/002000001378/ckeditor/B8B20B219C0120ABFB1A7D097D8F7336.jpg\"><img alt=\"\" src=\"https://res.purcotton.com//images/commodity/002011002/80000000/002000001378/ckeditor/4EB13DA1DE86B5BB053C5B372BBD80D3.jpg\"><img alt=\"\" src=\"https://res.purcotton.com//images/commodity/002011002/80000000/002000001378/ckeditor/30094A97DE82EDB7D885CA4BA2B8F6C8.jpg\"><img alt=\"\" src=\"https://res.purcotton.com//images/commodity/002011002/80000000/002000001378/ckeditor/F3DC3BCCE1EBC2A9AF00576C3E6CD683.jpg\"><img alt=\"\" src=\"https://res.purcotton.com//images/commodity/002011002/80000000/002000001378/ckeditor/087DCB75B776EB246466D00F946BBFD9.jpg\"><img alt=\"\" src=\"https://res.purcotton.com//images/commodity/002011002/80000000/002000001378/ckeditor/634235846DE3B7A35C9255B255AE498E.jpg\"><img alt=\"\" src=\"https://res.purcotton.com//images/commodity/002011002/80000000/002000001378/ckeditor/8FFD5CE20AC1996530C6E3587DAFDEC4.jpg\"><img alt=\"\" src=\"https://res.purcotton.com//images/commodity/002011002/80000000/002000001378/ckeditor/48BFB34DBC2CC0437C11BCA4C836FF3C.jpg\"></p>\r\n\r\n\t\t\t\t</div><!-- upload end -->\r\n\t\t\t</div>",
          "price": "1568",
          "sale_price": "1019.2",
          "kucun": 1020,
          "sale_count": 2323,
          "ctime": "2018-12-18 18:30:00",
          "color": null,
          "size": "幼儿床适用",
          "small_pic": "https://res.purcotton.com//images/commodity/002011002/80000000/002000001378/10000001_00000695/62C44938FF4B0D57DB31EFEC869AF7C5.jpg_100x100.jpg,https://res.purcotton.com//images/commodity/002011002/80000000/002000001378/10000001_00000695/D1F57051FAB232B135C203D9F0ADCD47.jpg_100x100.jpg",
          "big_pic": "https://res.purcotton.com//images/commodity/002011002/80000000/002000001378/10000001_00000695/E3855E8AE1DCAF5ED11250CCAA0C7DF1.jpg_750x600.jpg,https://res.purcotton.com//images/commodity/002011002/80000000/002000001378/10000001_00000695/D1F57051FAB232B135C203D9F0ADCD47.jpg_750x600.jpg"
        },
        {
          "id": 4,
          "name": "盒装水洗纱布面巾25x50-5P,3片/盒(水洗后成型尺寸)",
          "description": "纯棉5层纱布吸水迅速 易洗易干",
          "discount_info": "【满折】棉苗会员正价商品92折，棉桃会员88折，棉花会员85折\r\n【满赠】圣诞节全场单笔满338送卫生巾2包，满468送汗巾3条，满658送书籍1本（单笔订单限赠1份）",
          "content": "<div class=\"content\">\r\n\t\t\t\t<div class=\"script-append\">\r\n\t\t\t\t\t<script src=\"https://res.purcotton.com//mres/res/mall/js/commodity/commodity_790.js\"></script><div><img class=\"goods-notice\" style=\"vertical-align:middle;\" src=\"https://res.purcotton.com/base/images/goods-notice-pc.jpg?v=201802110943\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- mc上传商品的具体信息 -->\r\n\t\t\t\t<div class=\"upload\">\r\n\t\t\t\t\t<p>\r\n\t<img alt=\"\" src=\"https://res.purcotton.com//images/commodity/002004001/80000000/002000000276/ckeditor/5D6DFDB950F32D945E7AFB882ADC7BCE.jpg\"><img alt=\"\" src=\"https://res.purcotton.com//images/commodity/002004001/80000000/002000000276/ckeditor/75B228E82946264F3FB200E4E094AE53.jpg\"><img alt=\"\" src=\"https://res.purcotton.com//images/commodity/002004001/80000000/002000000276/ckeditor/B8C7E1B36E9C5B1BC28253FEF24B9A5B.jpg\"><img alt=\"\" src=\"https://res.purcotton.com//images/commodity/002004001/80000000/002000000276/ckeditor/4FDFC6544B6D075D14613DE357C716FE.jpg\"><img alt=\"\" src=\"https://res.purcotton.com//images/commodity/002004001/80000000/002000000276/ckeditor/AEF108863B9854C5CD5505E224E7943B.jpg\"><img alt=\"\" src=\"https://res.purcotton.com//images/commodity/002004001/80000000/002000000276/ckeditor/21BE0B9EE77AB482C7CDE00D8BEBC6B3.jpg\"><img alt=\"\" src=\"https://res.purcotton.com//images/commodity/002004001/80000000/002000000276/ckeditor/F8EF07C239DBB2793C44B68FC7FE23BE.jpg\"><img alt=\"\" src=\"https://res.purcotton.com//images/commodity/002004001/80000000/002000000276/ckeditor/E666DCA2DF62A89C8121B6D83CC73170.jpg\"></p>\r\n\r\n\t\t\t\t</div><!-- upload end -->\r\n\t\t\t</div>",
          "price": "98",
          "sale_price": "98",
          "kucun": 0,
          "sale_count": 4998,
          "ctime": "2018-12-20 18:30:00",
          "color": null,
          "size": null,
          "small_pic": null,
          "big_pic": null
        }
      ],
      "totalCount": 3
    },
    "succMsg": "获取商品列表成功!",
    "errMsg": null
  }
 * @apiSampleRequest /v1/goods/getGoodsList
 * @apiVersion 1.0.0
 */
router.get('/getGoodsList', ctrl.goods.getGoodsListAction)

module.exports = router;
