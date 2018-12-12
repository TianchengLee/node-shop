const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const fs = require('fs')
const FileStreamRotator = require('file-stream-rotator');
const session = require('express-session')
const cors = require('cors')
const expressJwt = require('express-jwt')

const ResBody = require('./models/ResBody')
const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')


const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const logDirectory = __dirname + '/logs'
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)

const accessLogStream = FileStreamRotator.getStream({
  filename: logDirectory + '/accss-%DATE%.log',
  frequency: 'daily',
  verbose: false
})

app.use(cors())
app.use(logger('dev'))
app.use(logger('combined', { stream: accessLogStream }))
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
app.use(expressJwt({ secret }).unless({
  //除了这些地址, 其他的URL都需要验证, 支持正则
  path: [
    '/users/login',
    '/users/register',
    '/users/getVCode',
    /\/users\/checkUsername\/\w*/
  ]
}))

//拦截器
app.use(function (err, req, res, next) {
  //当token验证失败时会抛出如下错误
  if (err.name === 'UnauthorizedError') {
    //这个需要根据自己的业务逻辑来处理（ 具体的err值 请看下面）
    res.status(401).send(new ResBody(401, null, null, '无效的token!'))
  }
})

app.use(express.static(path.join(__dirname, 'public')))
app.use('/', indexRouter)
app.use('/users', usersRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

app.use(function (err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app