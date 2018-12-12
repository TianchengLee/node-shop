const sqlExcute = require('../db')
const svgCaptcha = require('svg-captcha')
const bcrypt = require('bcryptjs')
const ResBody = require('../models/ResBody')
const jwt = require('jsonwebtoken')
const config = require('../config')
const moment = require('moment')

const getUserCountSql = 'SELECT count(*) as count FROM users WHERE username = ?'

const addUserSql = 'INSERT INTO users SET ?'

module.exports = {
  registerAction(req, res) {
    console.log(req.body)
    console.log(req.session.vCode)
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
          res.send(new ResBody(200, userInfo, '注册成功!'))
        }
      }, err => {
        res.status(500).send(err.message)
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

    sqlExcute('SELECT password, mobile FROM users WHERE username = ?', userInfo.username)
      .then(result => {
        if (!result || result.length === 0) return res.status(400).send(new ResBody(400, null, null, '用户名不存在!'))
        const hash = result[0].password
        const mobile = result[0].mobile
        const username = userInfo.username
        if (bcrypt.compareSync(req.body.password, hash)) {
          const secret = config.secret
          let token = jwt.sign(userInfo, secret, {
            expiresIn: 2592000 //一个月到期时间
          })
          token = 'Bearer ' + token
          res.send(new ResBody(200, { token, username, mobile }, '登录成功!', null))
        } else {
          res.status(400).send(new ResBody(400, null, '登录失败!密码错误!', null));
        }
      })
  }
}