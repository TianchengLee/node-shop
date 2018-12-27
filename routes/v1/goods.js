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
    "succMsg": "获取商品一级分类列表数据成功!",
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
          "id": 15,
          "name": "孕产用品",
          "img": "https://res.purcotton.com/category/002004.jpg"
        },
        {
          "id": 16,
          "name": "厨房用品",
          "img": "https://res.purcotton.com/category/003001.jpg"
        },
        {
          "id": 17,
          "name": "床上用品",
          "img": "https://res.purcotton.com/category/003002.jpg"
        },
        {
          "id": 18,
          "name": "护理用品",
          "img": "https://res.purcotton.com/category/003003.jpg"
        },
        {
          "id": 19,
          "name": "旅游户外",
          "img": "https://res.purcotton.com/category/003004.jpg"
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
            "name": "婴童护理",
            "img": "https://res.purcotton.com/category/001006.jpg"
        },
        {
            "id": 6,
            "name": "婴童卫浴",
            "img": "https://res.purcotton.com/category/001007.jpg"
        },
        {
            "id": 7,
            "name": "婴童床品",
            "img": "https://res.purcotton.com/category/001001.jpg"
        },
        {
            "id": 8,
            "name": "婴童服装(0-1岁)",
            "img": "https://res.purcotton.com/category/001003.jpg"
        },
        {
            "id": 9,
            "name": "婴童服装(1-4岁)",
            "img": "https://res.purcotton.com/category/001004.jpg"
        },
        {
            "id": 10,
            "name": "婴童服装(4岁以上) ",
            "img": "https://res.purcotton.com/category/001005.jpg"
        },
        {
            "id": 11,
            "name": "婴童服饰",
            "img": "https://res.purcotton.com/category/001002.jpg"
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
          "cover_img": "https://res.purcotton.com//images/commodity/002010009/80000000/002000001384/10000001_00000695/06FF87611C685BC71FA2C921058564CC.jpg_350x350.jpg",
          "description": "双层纱布面料，中间100%棉填充，亲肤保暖；袖子可拆卸，伸展更自由。",
          "discount_info": "【限时活动】圣诞欢乐颂到手价5折起【满赠】圣诞节全场单笔满338送卫生巾2包，满468送汗巾3条，满658送书籍1本（单笔订单限赠1份）",
          "price": "398",
          "sale_price": "398",
          "kucun": 1230,
          "sale_count": 2360,
          "ctime": "2018-12-19 18:30:00"
        },
        {
          "id": 2,
          "name": "幼儿纱布床品7件套件（带被芯）幼儿床适用， 1套装",
          "cover_img": "https://res.purcotton.com//images/commodity/002011002/80000000/002000001378/10000001_00000695/62C44938FF4B0D57DB31EFEC869AF7C5.jpg_350x350.jpg",
          "description": "透气-优质纱布面料， 舒适透气， 让宝宝享受高质量睡眠。",
          "discount_info": "【限时活动】圣诞欢乐颂到手价5折起【满赠】圣诞节全场单笔满338送卫生巾2包，满468送汗巾3条，满658送书籍1本（单笔订单限赠1份）",
          "price": "1568",
          "sale_price": "1019.2",
          "kucun": 1020,
          "sale_count": 2323,
          "ctime": "2018-12-18 18:30:00"
        },
        {
          "id": 4,
          "name": "盒装水洗纱布面巾25x50-5P,3片/盒(水洗后成型尺寸)",
          "cover_img": "https://res.purcotton.com//images/commodity/002004001/80000000/002000000276/10000001_00000607/3C9E19B7D6BA02964C19E6476E79FFD9.jpg_350x350.jpg",
          "description": "纯棉5层纱布吸水迅速 易洗易干",
          "discount_info": "【满折】棉苗会员正价商品92折，棉桃会员88折，棉花会员85折【满赠】圣诞节全场单笔满338送卫生巾2包，满468送汗巾3条，满658送书籍1本（单笔订单限赠1份）",
          "price": "98",
          "sale_price": "98",
          "kucun": 0,
          "sale_count": 4998,
          "ctime": "2018-12-20 18:30:00"
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

/**
 * @api {get} /v1/goods/getGoodsInfo/:id 获取商品详情
 * @apiDescription 获取商品详情
 * @apiName getGoodsInfo
 * @apiGroup 6.Goods-Info
 * @apiParam {number} id 根据商品id获取商品详细信息
 * @apiSuccess {number} status 状态码
 * @apiSuccess {json} data 商品列表数据
 * @apiSuccess {string} succMsg 成功消息
 * @apiSuccess {string} succMsg 错误消息
 * @apiSuccessExample {json} Success-Response:
 * {
    "status": 200,
    "data": {
      "id": 1,
      "name": "婴儿纱布夹棉侧开睡袋90x58cm， 1条装",
      "description": "双层纱布面料，中间100%棉填充，亲肤保暖；袖子可拆卸，伸展更自由。",
      "discount_info": "【限时活动】圣诞欢乐颂到手价5折起【满赠】圣诞节全场单笔满338送卫生巾2包，满468送汗巾3条，满658送书籍1本（单笔订单限赠1份）",
      "content": "<div class=\"content\">\r\n\t\t\t\t<div class=\"script-append\">\r\n\t\t\t\t\t<script src=\"https://res.purcotton.com//mres/res/mall/js/commodity/commodity_790.js\"></script><div><img class=\"goods-notice\" style=\"vertical-align:middle;\" src=\"https://res.purcotton.com/base/images/goods-notice-pc.jpg?v=201802110943\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- mc上传商品的具体信息 -->\r\n\t\t\t\t<div class=\"upload\">\r\n\t\t\t\t\t<p>\r\n\t<img alt=\"\" src=\"https://res.purcotton.com//images/commodity/002010009/80000000/002000001384/ckeditor/E63CD5AC361A9B15CDC6B5DE382E5DD9.jpg\"><img alt=\"\" src=\"https://res.purcotton.com//images/commodity/002010009/80000000/002000001384/ckeditor/645834B99E2C16BBF6642E9BFA86B3DE.jpg\"><img alt=\"\" src=\"https://res.purcotton.com//images/commodity/002010009/80000000/002000001384/ckeditor/AC0024704E484B28C897B6A0CFE83199.jpg\"><img alt=\"\" src=\"https://res.purcotton.com//images/commodity/002010009/80000000/002000001384/ckeditor/2F6C7281DB84924802D07A0BBDE9D55A.jpg\"><img alt=\"\" src=\"https://res.purcotton.com//images/commodity/002010009/80000000/002000001384/ckeditor/37BD2AEADB8B6F842BD6263C3F089789.jpg\"><img alt=\"\" src=\"https://res.purcotton.com//images/commodity/002010009/80000000/002000001384/ckeditor/056DC542CE9505A62880BEDE009CDDA7.jpg\"><img alt=\"\" src=\"https://res.purcotton.com//images/commodity/002010009/80000000/002000001384/ckeditor/8E311DBC3E38A89FAD273EE83244F928.jpg\"><img alt=\"\" src=\"https://res.purcotton.com//images/commodity/002010009/80000000/002000001384/ckeditor/16AD3FB6F8978B6DFAFEB75E9D131436.jpg\"><img alt=\"\" src=\"https://res.purcotton.com//images/commodity/002010009/80000000/002000001384/ckeditor/27586CF62EBBF9AB6191F1C96D8C7892.jpg\"><img alt=\"\" src=\"https://res.purcotton.com//images/commodity/002010009/80000000/002000001384/ckeditor/2CFA25A9266FF17B2F0FB2159A168931.jpg\"></p>\r\n\r\n\t\t\t\t</div><!-- upload end -->\r\n\t\t\t</div>",
      "price": "398",
      "sale_price": "398",
      "stock": 1230,
      "sale_count": 2360,
      "ctime": "2018-12-19 18:30:00",
      "color": "星际呦呦,森林乐章,绿底白树",
      "size": null,
      "small_img": null,
      "big_img": null
    },
    "succMsg": "获取商品详情成功!",
    "errMsg": null
  }
 * @apiSampleRequest /v1/goods/getGoodsInfo/:id
 * @apiVersion 1.0.0
 */
router.get('/getGoodsInfo/:id', ctrl.goods.getGoodsInfoAction)

module.exports = router;
