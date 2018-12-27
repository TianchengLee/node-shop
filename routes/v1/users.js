const express = require('express');
const router = express.Router();
const ctrl = require('../../controller')

/**
 * @api {post} /v1/users/register 用户注册
 * @apiDescription 用户注册
 * @apiName register
 * @apiGroup 1.Users-Sign
 * @apiParam {string} username 用户名
 * @apiParam {string} nickname 昵称
 * @apiParam {string} password 密码
 * @apiParam {string} vCode 验证码
 * @apiParam {string} mobile 手机号
 * @apiSuccess {number} status 状态码
 * @apiSuccess {json} data 用户信息(带token)
 * @apiSuccess {string} succMsg 成功消息
 * @apiSuccess {string} errMsg 错误消息
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "status": 200,
 *   "data": {
 *       "ctime": "2018-12-14 21:27:18",
 *       "nickname": "ltc",
 *       "username": "ltc",
 *       "mobile": "13888888888",
 *       "token":"eyJzxcciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZWNyZXQiOiJpdGNhc3Qtd2giLCJpYXQiOjE1NDQ3OTQwMzgsImV4cCI6MTU0NzM4NjAzOH0.BTSqwVIHsT8UPT2T7AYVCnG7pc_zCv9UrBAIoCmcR1Y",
 *       "id": 1
 *   },
 *   "succMsg": "注册成功!",
 *   "errMsg": null
 * }
 * @apiSampleRequest /v1/users/register
 * @apiVersion 1.0.0
 */
router.post('/register', ctrl.users.registerAction)

/**
 * @api {get} /v1/users/getVCode 获取验证码
 * @apiDescription 获取验证码
 * @apiName getVCode
 * @apiGroup 1.Users-Sign
 * @apiSuccess {svg} svg 图片验证码
 * @apiSuccessExample {string} Success-Response:
 * <svg xmlns="http://www.w3.org/2000/svg" width="100" height="50" viewBox="0,0,100,50"><path d="M1 39 C54 38,32 41,94 30" stroke="#444" fill="none"/><path d="M9 37 C42 8,42 36,94 18" stroke="#222" fill="none"/></svg>
 * @apiSampleRequest /v1/users/getVCode
 * @apiVersion 1.0.0
 */
router.get('/getVCode', ctrl.users.getVCodeAction)

/**
 * @api {get} /v1/users/checkUsername/:username 检查用户名是否可用
 * @apiDescription 检查用户名是否可用
 * @apiName checkUsername
 * @apiGroup 1.Users-Sign
 * @apiParam {string} username 要检查的用户名
 * @apiSuccess {number} status 状态码
 * @apiSuccess {json} data 数据
 * @apiSuccess {string} succMsg 成功消息
 * @apiSuccess {string} succMsg 错误消息
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "status": 200,
 *   "data": null,
 *   "succMsg": "用户名可用!",
 *   "errMsg": null
 * }
 * @apiSampleRequest /v1/users/checkUsername/:username
 * @apiVersion 1.0.0
 */
router.get('/checkUsername/:username', ctrl.users.checkUsernameAction)

/**
 * @api {post} /v1/users/login 用户登录
 * @apiDescription 用户登录
 * @apiName login
 * @apiGroup 1.Users-Sign
 * @apiParam {string} username 用户名
 * @apiParam {string} password 密码
 * @apiSuccess {number} status 状态码
 * @apiSuccess {json} data 用户信息(带token)
 * @apiSuccess {string} succMsg 成功消息
 * @apiSuccess {string} errMsg 错误消息
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "status": 200,
 *   "data": {
 *       "nickname": "ltc",
 *       "username": "ltc",
 *       "id": 1,
 *       "mobile": "13888888888",
 *       "token":"eyJzxcciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZWNyZXQiOiJpdGNhc3Qtd2giLCJpYXQiOjE1NDQ3OTQwMzgsImV4cCI6MTU0NzM4NjAzOH0.BTSqwVIHsT8UPT2T7AYVCnG7pc_zCv9UrBAIoCmcR1Y",
 *   },
 *   "succMsg": "登录成功!",
 *   "errMsg": null
 * }
 * @apiSampleRequest /v1/users/login
 * @apiVersion 1.0.0
 */
router.post('/login', ctrl.users.loginAction)

/**
 * @api {get} /v1/users/getUserInfo 获取当前登录的用户信息 (需要token)
 * @apiDescription 获取当前登录的用户信息
 * @apiName getUserInfo
 * @apiGroup 2.Users-Profile
 * @apiHeader {string} Authorization token
 * @apiSuccess {number} status 状态码
 * @apiSuccess {json} data 数据
 * @apiSuccess {string} succMsg 成功消息
 * @apiSuccess {string} succMsg 错误消息
 * @apiSuccessExample {json} Success-Response:
 * {
 *  "status": 200,
 *  "data": {
 *      "id": 33,
 *      "nickname": "ltc",
 *      "username": "ltc",
 *      "mobile": "13888888888",
 *      "token":"eyJzxcciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZWNyZXQiOiJpdGNhc3Qtd2giLCJpYXQiOjE1NDQ3OTQwMzgsImV4cCI6MTU0NzM4NjAzOH0.BTSqwVIHsT8UPT2T7AYVCnG7pc_zCv9UrBAIoCmcR1Y",
 *  },
 *  "succMsg": "获取用户信息成功!",
 *  "errMsg": null
 * }
 * @apiSampleRequest /v1/users/getUserInfo
 * @apiVersion 1.0.0
 */
router.get('/getUserInfo', ctrl.users.getUserInfoAction)

/**
 * @api {post} /v1/users/updateUserInfo 修改个人信息 (需要token)
 * @apiDescription 修改个人信息
 * @apiName updateUserInfo
 * @apiGroup 2.Users-Profile
 * @apiHeader {string} Authorization token
 * @apiParam {string} mobile 手机号
 * @apiSuccess {number} status 状态码
 * @apiSuccess {json} data 用户信息(带token)
 * @apiSuccess {string} succMsg 成功消息
 * @apiSuccess {string} errMsg 错误消息
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "status": 200,
 *   "data": {
 *       "id": 1,
 *       "nickname": "ltc",
 *       "username": "ltc",
 *       "mobile": "13888888888",
 *       "token":"eyJzxcciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZWNyZXQiOiJpdGNhc3Qtd2giLCJpYXQiOjE1NDQ3OTQwMzgsImV4cCI6MTU0NzM4NjAzOH0.BTSqwVIHsT8UPT2T7AYVCnG7pc_zCv9UrBAIoCmcR1Y",
 *   },
 *   "succMsg": "用户信息修改成功!",
 *   "errMsg": null
 * }
 * @apiSampleRequest /v1/users/updateUserInfo
 * @apiVersion 1.0.0
 */
router.post('/updateUserInfo', ctrl.users.updateUserInfoAction)

/**
 * @api {post} /v1/users/updatePassword 修改密码 (需要token)
 * @apiDescription 修改密码
 * @apiName updatePassword
 * @apiGroup 2.Users-Profile
 * @apiHeader {string} Authorization token
 * @apiParam {string} oldPassword 旧密码
 * @apiParam {string} newPassword 新密码
 * @apiSuccess {number} status 状态码
 * @apiSuccess {null} data 数据
 * @apiSuccess {string} succMsg 成功消息
 * @apiSuccess {string} errMsg 错误消息
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "status": 200,
 *   "data": null,
 *   "succMsg": "修改密码成功!",
 *   "errMsg": null
 * }
 * @apiSampleRequest /v1/users/updatePassword
 * @apiVersion 1.0.0
 */
router.post('/updatePassword', ctrl.users.updatePasswordAction)

/**
 * @api {get} /v1/users/getReceiverAddress 获取所有收货人信息 (需要token)
 * @apiDescription 获取所有收货人信息
 * @apiName getReceiverAddress
 * @apiGroup 3.Users-Receiver
 * @apiHeader {string} Authorization token
 * @apiSuccess {number} status 状态码
 * @apiSuccess {json} data 所有收货人信息
 * @apiSuccess {string} succMsg 成功消息
 * @apiSuccess {string} succMsg 错误消息
 * @apiSuccessExample {json} Success-Response:
 * {
 *  "status": 200,
 *  "data": [
 *       {
 *           "id": 2,
 *           "receiver_name": "传智大法好",
 *           "mobile": "13030303030",
 *           "postcode": "430070",
 *           "province": "湖北省",
 *           "city": "武汉市",
 *           "area": "东湖高新区",
 *           "detailed_address": "金融港B15栋"
 *       }
 *   ],
 *  "succMsg": "获取收货人列表成功!",
 *  "errMsg": null
 * }
 * @apiSampleRequest /v1/users/getReceiverAddress
 * @apiVersion 1.0.0
 */
router.get('/getReceiverAddress', ctrl.users.getReceiverAddressAction)

/**
 * @api {get} /v1/users/getReceiverAddress/:id 获取指定收货人信息 (需要token)
 * @apiDescription 获取指定收货人信息
 * @apiName getReceiverAddressById
 * @apiGroup 3.Users-Receiver
 * @apiHeader {string} Authorization token
 * @apiParam {number} id 收货信息id
 * @apiSuccess {number} status 状态码
 * @apiSuccess {json} data 指定收货人信息
 * @apiSuccess {string} succMsg 成功消息
 * @apiSuccess {string} succMsg 错误消息
 * @apiSuccessExample {json} Success-Response:
 * {
 *  "status": 200,
 *  "data": [
 *       {
 *           "id": 2,
 *           "receiver_name": "传智大法好",
 *           "mobile": "13030303030",
 *           "postcode": "430070",
 *           "province": "湖北省",
 *           "city": "武汉市",
 *           "area": "东湖高新区",
 *           "detailed_address": "金融港B15栋"
 *       }
 *   ],
 *  "succMsg": "获取收货人列表成功!",
 *  "errMsg": null
 * }
 * @apiSampleRequest /v1/users/getReceiverAddress/:id
 * @apiVersion 1.0.0
 */
router.get('/getReceiverAddress/:id', ctrl.users.getReceiverAddressByIdAction)

/**
 * @api {get} /v1/users/deleteReceiverAddress/:id 删除收货人信息 (需要token)
 * @apiDescription 删除收货人信息
 * @apiName deleteReceiverAddress
 * @apiGroup 3.Users-Receiver
 * @apiHeader {string} Authorization token
 * @apiParam {number} id 收货人id
 * @apiSuccess {number} status 状态码
 * @apiSuccess {null} data 数据
 * @apiSuccess {string} succMsg 成功消息
 * @apiSuccess {string} succMsg 错误消息
 * @apiSuccessExample {json} Success-Response:
 * {
 *  "status": 200,
 *  "data": null,
 *  "succMsg": "删除收货人成功!",
 *  "errMsg": null
 * }
 * @apiSampleRequest /v1/users/deleteReceiverAddress/:id
 * @apiVersion 1.0.0
 */
router.get('/deleteReceiverAddress/:id', ctrl.users.deleteReceiverAddressAction)

/**
 * @api {post} /v1/users/addReceiverAddress 添加收货人信息 (需要token)
 * @apiDescription 添加收货人信息
 * @apiName addReceiverAddress
 * @apiGroup 3.Users-Receiver
 * @apiHeader {string} Authorization token
 * @apiParam {string} receiver_name 收货人姓名
 * @apiParam {string} mobile 手机号
 * @apiParam {string} postcode 邮编
 * @apiParam {string} province 省
 * @apiParam {string} city 市
 * @apiParam {string} area 区
 * @apiParam {string} detailed_address 详细地址
 * @apiSuccess {number} status 状态码
 * @apiSuccess {json} data 添加的收货人信息
 * @apiSuccess {string} succMsg 成功消息
 * @apiSuccess {string} errMsg 错误消息
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "status": 200,
 *   "data":  {
 *       "id": 1,
 *       "receiver_name": "传智人",
 *       "mobile": "13838383838",
 *       "postcode": "430000",
 *       "province": "湖北省",
 *       "city": "武汉市",
 *       "area": "洪山区",
 *       "detailed_address": "汤逊湖北路长城科技园6栋知乐楼",
 *       "user_id": 1
 *   },
 *   "succMsg": "添加收货人成功!",
 *   "errMsg": null
 * }
 * @apiSampleRequest /v1/users/addReceiverAddress
 * @apiVersion 1.0.0
 */
router.post('/addReceiverAddress', ctrl.users.addReceiverAddressAction)

/**
 * @api {post} /v1/users/updateReceiverAddress/:id 修改收货人信息 (需要token)
 * @apiDescription 修改收货人信息
 * @apiName updateReceiverAddress
 * @apiGroup 3.Users-Receiver
 * @apiHeader {string} Authorization token
 * @apiParam {string} [receiver_name] 收货人姓名
 * @apiParam {string} [mobile] 手机号
 * @apiParam {string} [postcode] 邮编
 * @apiParam {string} [province] 省
 * @apiParam {string} [city] 市
 * @apiParam {string} [area] 区
 * @apiParam {string} [detailed_address] 详细地址
 * @apiSuccess {number} status 状态码
 * @apiSuccess {json} data 修改的收货人信息
 * @apiSuccess {string} succMsg 成功消息
 * @apiSuccess {string} errMsg 错误消息
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "status": 200,
 *   "data":  {
 *       "id": 1,
 *       "receiver_name": "传智人",
 *       "mobile": "13838383838",
 *       "postcode": "430000",
 *       "province": "湖北省",
 *       "city": "武汉市",
 *       "area": "洪山区",
 *       "detailed_address": "汤逊湖北路长城科技园6栋知乐楼",
 *       "user_id": 1
 *   },
 *   "succMsg": "修改收货人成功!",
 *   "errMsg": null
 * }
 * @apiSampleRequest /v1/users/updateReceiverAddress/:id
 * @apiVersion 1.0.0
 */
router.post('/updateReceiverAddress/:id', ctrl.users.updateReceiverAddressAction)

module.exports = router;
