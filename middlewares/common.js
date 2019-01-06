const ResBody = require('../models/ResBody')

function sendErr(status, msg) {
  this.status(status).send(new ResBody(status, null, null, msg))
}

function sendSucc(msg, data = null) {
  this.status(200).send(new ResBody(200, data, msg, null))
}

function checkFormBody(attrs = [], res) {
  let pass = true
  let keywords = []
  attrs.forEach(item => {
    if (!(item in this.body) && !(item in this.params) && !(item in this.query)) {
      keywords.push(item)
      pass = false
    }
  })

  let checkBodies = [this.body, this.params, this.query]

  checkBodies.forEach(item => {
    for (let k in item) {
      if (attrs.indexOf(k) === -1) continue;
      let val = item[k]
      if (!val || !val.toString().trim()) {
        keywords.push(k)
        pass = false
      }
    }
  })
  !pass && res && res.sendErr(400, keywords.join(',') + '未填写!')
  return pass
}

module.exports = {
  sendSucc(req, res, next) {
    res.sendErr = sendErr
    res.sendSucc = sendSucc
    next()
  },
  sendErr(err, req, res, next) {
    res.sendErr = sendErr
    next()
  },
  checkFormBody(req, res, next) {
    req.checkFormBody = checkFormBody
    next()
  }
}