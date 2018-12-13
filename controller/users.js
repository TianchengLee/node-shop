const sqlExcute = require('../db')
const svgCaptcha = require('svg-captcha')
const bcrypt = require('bcryptjs')
const ResBody = require('../models/ResBody')
const jwt = require('jsonwebtoken')
const config = require('../config')
const secret = config.secret

const moment = require('moment')

// SQL语句
const getUserCountSql = 'SELECT count(*) as count FROM users WHERE username = ?'
const addUserSql = 'INSERT INTO users SET ?'
const addUserTokenSql = 'INSERT INTO users_auth SET ?'
const getUserInfoSql = `SELECT u.id, u.password, u.mobile ,ua.token, ua.ctime
                        FROM users AS u 
                        LEFT JOIN users_auth AS ua 
                        ON u.id = ua.user_id 
                        WHERE username = ?
                        ORDER BY ua.ctime DESC`
const getUserInfoByTokenSql = `SELECT u.id, u.username, u.mobile, ua.token
                              FROM users AS u 
                              LEFT JOIN users_auth AS ua 
                              ON u.id = ua.user_id 
                              WHERE token = ?
                              ORDER BY ua.ctime DESC`
const updateUserInfoSql = `UPDATE users
                          SET ?
                          WHERE id = ?`
const getReceiverAddressSql = `SELECT id, receiver_name, mobile, postcode, province, city, area, detailed_address 
                              FROM receiver_address
                              WHERE del_state = 0 
                              AND user_id = ?`
const deleteReceiverAddressSql = `UPDATE receiver_address
                                  SET del_state = 1
                                  WHERE id = ?`

module.exports = {
  registerAction(req, res) {
    if (!req.session.vCode || !req.body.vCode || req.session.vCode.toLowerCase() != req.body.vCode.toLowerCase()) return res.status(400).send(new ResBody(400, null, null, '验证码错误!'))
    if (!req.body.username || !req.body.username.trim()) return res.status(400).send(new ResBody(400, null, null, '用户名未填写！'))
    if (!req.body.password || !req.body.password.trim()) return res.status(400).send(new ResBody(400, null, null, '密码未填写！'))
    if (!req.body.mobile || !req.body.mobile.trim()) return res.status(400).send(new ResBody(400, null, null, '用户手机号未填写！'))

    req.body.password = bcrypt.hashSync(req.body.password, 10)

    let userInfo = { ...req.body, ctime: moment().format('YYYY-MM-DD HH:mm:ss') }

    delete userInfo.vCode

    sqlExcute(getUserCountSql, userInfo.username)
      .then(result => {
        if (result[0].count > 0) return res.status(400).send(new ResBody(400, null, null, '用户名已存在!'))
        return sqlExcute(addUserSql, userInfo)
      })
      .then(result => {
        if (result.affectedRows) {
          delete userInfo.password

          let token = jwt.sign({ secret }, secret, {
            expiresIn: config.tokenExpire
          })
          let ctime = moment().format('YYYY-MM-DD HH:mm:ss')
          const tokenInfo = {
            user_id: result.insertId,
            token,
            ctime
          }
          userInfo.token = token
          return sqlExcute(addUserTokenSql, tokenInfo)
        }
      }, err => {
        res.status(500).send(err.message)
      })
      .then(result => {
        if (result.affectedRows) {
          res.send(new ResBody(200, userInfo, '注册成功!'))
        }
      })

  },
  getVCodeAction(req, res) {
    const codeConfig = {
      size: 4,// 验证码长度
      ignoreChars: '0o1i', // 验证码字符中排除 0o1i
      noise: 8, // 干扰线条的数量
      width: 100
    }
    const vCode = svgCaptcha.create(codeConfig)
    req.session.vCode = vCode.text
    console.log(vCode.text)
    res.type('svg')
    res.send(vCode.data)
  },
  checkUsernameAction(req, res) {
    if (!req.params.username || !req.params.username.trim()) return res.status(400).send(new ResBody(400, null, null, '用户名未填写！'))

    sqlExcute(getUserCountSql, req.params.username)
      .then(result => {
        if (result[0].count > 0) {
          res.status(400).send(new ResBody(400, null, null, '用户名已存在'))
        } else {
          res.send(new ResBody(400, null, '用户名可用', null))
        }
      })
  },
  loginAction(req, res) {
    if (!req.body.username || !req.body.username.trim()) return res.status(400).send(new ResBody(400, null, null, '用户名未填写！'))
    if (!req.body.password || !req.body.password.trim()) return res.status(400).send(new ResBody(400, null, null, '密码未填写！'))

    const userInfo = {
      username: req.body.username,
      password: req.body.password
    }

    sqlExcute(getUserInfoSql, userInfo.username)
      .then(result => {
        if (!result || result.length === 0) return res.status(400).send(new ResBody(400, null, null, '用户名不存在!'))
        const hash = result[0].password
        userInfo.id = result[0].id
        userInfo.mobile = result[0].mobile
        if (bcrypt.compareSync(req.body.password, hash)) {
          userInfo.token = result[0].token
          if (!userInfo.token || Date.now() - new Date(result[0].ctime) >= config.tokenExpire) {
            userInfo.token = jwt.sign({ secret }, secret, {
              expiresIn: config.tokenExpire
            })
            let tokenInfo = {
              user_id: userInfo.id,
              token: userInfo.token,
              ctime: moment().format('YYYY-MM-DD HH:mm:ss')
            }
            sqlExcute(addUserTokenSql, tokenInfo)
          }
          delete userInfo.password
          res.send(new ResBody(200, userInfo, '登录成功!', null))
        } else {
          res.status(400).send(new ResBody(400, null, null, '登录失败!密码错误!'))
        }
      })
  },
  getUserInfoInterceptor(req, res, next) {
    sqlExcute(getUserInfoByTokenSql, req.headers.authorization)
      .then(result => {
        req.userInfo = result[0]
        next()
      }, err => {
        next()
      })
  },
  getUserInfoAction(req, res) {
    res.send(new ResBody(200, req.userInfo, '获取用户信息成功!', null))
  },
  updateUserInfoAction(req, res) {
    if (!req.body.mobile || !req.body.mobile.trim()) return res.status(400).send(new ResBody(400, null, null, '用户手机号未填写！'))

    let userInfo = { mobile: req.body.mobile }

    sqlExcute(updateUserInfoSql, [userInfo, req.userInfo.id])
      .then(result => {
        if (result.affectedRows) {
          req.userInfo.mobile = req.body.mobile
          res.send(new ResBody(200, req.userInfo, '用户信息修改成功!', null))
        }
      }, err => {
        res.send(new ResBody(500, null, null, '用户信息修改失败!'))
      })
  },
  updatePasswordAction(req, res) {
    if (!req.body.oldPassword || !req.body.oldPassword.trim()) return res.status(400).send(new ResBody(400, null, null, '旧密码未填写！'))
    if (!req.body.newPassword || !req.body.newPassword.trim()) return res.status(400).send(new ResBody(400, null, null, '新密码未填写！'))

    sqlExcute(getUserInfoSql, req.userInfo.username)
      .then(result => {
        if (!result || result.length === 0) return res.status(400).send(new ResBody(400, null, null, '用户名不存在!'))
        const hash = result[0].password
        if (bcrypt.compareSync(req.body.oldPassword, hash)) {
          let password = bcrypt.hashSync(req.body.newPassword, 10)
          return sqlExcute(updateUserInfoSql, [{ password }, req.userInfo.id])
        } else {
          res.status(400).send(new ResBody(400, null, null, '修改密码失败!密码错误!'))
        }
      })
      .then(result => {
        if (result.affectedRows) {
          res.send(new ResBody(200, null, '修改密码成功!', null))
        }
      }, err => {
        res.status(500).send(new ResBody(500, null, null, '修改密码失败!内部错误:' + err.message));
      })
  },
  getReceiverAddressAction(req, res) {
    sqlExcute(getReceiverAddressSql, req.userInfo.id)
      .then(result => {
        res.send(new ResBody(200, result, '获取收货人列表成功!', null))
      })
  },
  deleteReceiverAddressAction(req, res) {
    const receiverId = req.params.id
    sqlExcute(deleteReceiverAddressSql, receiverId)
      .then(result => {
        console.log(result)
        if (result.affectedRows) res.send(new ResBody(200, null, '删除收货人成功!', null))
        else res.status(400).send(new ResBody(400, null, '删除收货人失败!请检查id是否正确!', null))
      })
  }
}