const conn = require('../db')

module.exports = {
  registerAction(req, res) {
    console.log(req.body)
    if (!req.session.vCode || req.session.vCode != req.body.vCode) return res.send({ "error": 401, "message": "验证码错误!" })
    if (!req.body.username) return res.send({ "error": 403, "message": "用户名未填写！" })
    if (!req.body.password) return res.send({ "error": 403, "message": "密码未填写！" })
    if (!req.body.mobile) return res.send({ "error": 403, "message": "用户手机号未填写！" })
    res.send('ok')
  },
  vCodeAction(req, res) {
    let vCode = ''
    for (let i = 0; i < 6; i++) {
      vCode += (Math.random() * 1000).toString().substr(0, 1)
    }
    req.session.vCode = vCode
    res.send(vCode)
  }
}