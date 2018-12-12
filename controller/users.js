const sqlExcute = require('../db')
const svgCaptcha = require('svg-captcha')
const bcrypt = require('bcryptjs')
const ResBody = require('../models/ResBody')

module.exports = {
  registerAction(req, res, next) {
    console.log(req.body)
    console.log(req.session.vCode)
    if (!req.session.vCode || !req.body.vCode || req.session.vCode.toLowerCase() != req.body.vCode.toLowerCase()) return res.status(400).send(new ResBody(400, null, null, '验证码错误!'))
    if (!req.body.username || !req.body.username.trim()) return res.status(400).send(new ResBody(400, null, null, '用户名未填写！'))
    if (!req.body.password || !req.body.password.trim()) return res.status(400).send(new ResBody(400, null, null, '密码未填写！'))
    if (!req.body.mobile || !req.body.mobile.trim()) return res.status(400).send(new ResBody(400, null, null, '用户手机号未填写！'))

    req.body.password = bcrypt.hashSync(req.body.password, 10)

    let userInfo = { ...req.body }

    delete userInfo.vCode

    sqlExcute('SELECT count(*) as count FROM users WHERE username = ?', userInfo.username)
      .then(result => {
        if (result[0].count > 0) return res.status(400).send(new ResBody(400, null, null, '用户名已存在!'))
        return sqlExcute('INSERT INTO users SET ?', userInfo)
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
  vCodeAction(req, res) {
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
  }
}