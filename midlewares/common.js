const ResBody = require('../models/ResBody')

function sendErr(status, msg) {
  this.status(status).send(new ResBody(status, null, null, msg))
}

function sendSucc(msg, data = null) {
  this.status(200).send(new ResBody(200, data, msg, null))
}

module.exports = {
  normal(req, res, next) {
    res.sendErr = sendErr
    res.sendSucc = sendSucc
    next()
  },
  err(err, req, res, next) {
    res.sendErr = sendErr
    next()
  }
}