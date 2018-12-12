const conn = require('../db')
const svgCaptcha = require('svg-captcha')

module.exports = {
  registerAction(req, res) {
    console.log(req.body)
    console.log(req.session.vCode)
    if (!req.session.vCode || !req.body.vCode || req.session.vCode.toLowerCase() != req.body.vCode.toLowerCase()) return res.send({ "error": 401, "message": "验证码错误!" })
    if (!req.body.username) return res.send({ "error": 403, "message": "用户名未填写！" })
    if (!req.body.password) return res.send({ "error": 403, "message": "密码未填写！" })
    if (!req.body.mobile) return res.send({ "error": 403, "message": "用户手机号未填写！" })
    res.send('ok')
  },
  vCodeAction(req, res) {
    // let vCode = ''
    // for (let i = 0; i < 6; i++) {
    //   vCode += (Math.random() * 1000).toString().substr(0, 1)
    // }
    // req.session.vCode = vCode
    // res.send(vCode)
    const codeConfig = {
      size: 4,// 验证码长度
      ignoreChars: '0o1i', // 验证码字符中排除 0o1i
      noise: 8, // 干扰线条的数量
      width: 100
    }
    const vCode = svgCaptcha.create(codeConfig)
    req.session.vCode = vCode.text

    res.type('svg')
    res.send(vCode.data)
  }
}