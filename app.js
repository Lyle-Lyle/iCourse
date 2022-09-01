const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const session = require('koa-generic-session')
const koaRedis = require('koa-redis')

const { sessionInfo, cookieInfo, redisInfo } = require('./config/config')


const crawlerRouter = require('./routes/crawler');
const indexRouter = require('./routes/index');


// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// 加密cookie的key
app.keys = sessionInfo.keys;


app.use(session({
  key: sessionInfo.name,  // cookie name
  prefix: sessionInfo.prefix,  // redis key 前缀
  cookie: cookieInfo,
  store: koaRedis(redisInfo)
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(crawlerRouter.routes(), crawlerRouter.allowedMethods())
app.use(indexRouter.routes(), indexRouter.allowedMethods())


// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
