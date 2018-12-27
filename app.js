const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
// const logger = require('morgan')
// const fs = require('fs')
// const FileStreamRotator = require('file-stream-rotator');
const session = require('express-session')
const cors = require('cors')
const expressJwt = require('express-jwt')
const mount = require('mount-routes')

const usersMiddleware = require('./middlewares/users')

const commonMiddleware = require('./middlewares/common')

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// const logDirectory = __dirname + '/logs'
// fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)

// const accessLogStream = FileStreamRotator.getStream({
//   filename: logDirectory + '/accss-%DATE%.log',
//   frequency: 'daily',
//   verbose: false
// })

// 响应错误和响应成功的方法封装
app.use(commonMiddleware.sendSucc)
app.use(commonMiddleware.sendErr)
app.use(commonMiddleware.checkFormBody)
app.use(cors({
  origin: /.*/,
  credentials: true
}))
// app.use(logger('dev'))
// app.use(logger('combined', { stream: accessLogStream }))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

//导入签名
const config = require('./config')
const secret = config.secret

app.use(session({
  secret,
  name: 'itcast-wh-name',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 8000000000 }
}))

//使用中间件验证token合法性
app.use(expressJwt({
  secret, getToken(req) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
      return req.headers.authorization.split(' ')[1]
    } else if (req.query && req.query.token) {
      return req.query.token
    } else if (req.body && req.body.token) {
      return req.body.token
    }
    return req.headers.authorization
  }
}).unless({
  //除了这些地址, 其他的URL都需要验证, 支持正则
  path: [
    '/',
    /(css|js|png|jpg|jpeg|ico)/,
    '/index.html',
    '/v1/users/login',
    '/v1/users/register',
    '/v1/users/getVCode',
    /\/v1\/users\/checkUsername\/\w*/,
    /\/news\/get\w*/,
    /\/goods\/get\w*/,
    /\/home\/get\w*/,
  ]
}))

app.use(express.static(path.join(__dirname, 'public')))

app.use((err, req, res, next) => {
  //当token验证失败时会抛出如下错误
  if (err.name === 'UnauthorizedError') {
    res.sendErr(401, '无效的token!')
  }
})

// 获取用户信息存储在req.userInfo中
app.use(usersMiddleware.getUserInfo)

mount(app, path.join(process.cwd(), "/routes"), true)

app.use((req, res, next) => {
  next(createError(404))
})

app.use((err, req, res, next) => {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  res.status(err.status || 500)
  res.render('error')
})

module.exports = app