const express = require('express')
const path = require('path')
const dayjs = require('dayjs')
const template = require('art-template')
const bodyParser = require('body-parser')
const main = require('./routes/main')
const list = require('./routes/list')
require('./model')

const app = express()
// 参数：模版文件后缀名, 模版引擎
template.defaults.imports.dayjs = dayjs
app.engine('html', require('express-art-template'))
// 设置 views 目录 和 省略后缀名
app.set('views', path.join(__dirname, 'views'))
  .set('view engine', 'html')

// 使用中间件, 配置静态资源目录, 二级路由
app.use(express.static(path.join(__dirname, 'public')))
  .use(bodyParser.urlencoded({ extended: false }))
  .use(main)
  .use(list)

// 重定向
app.get('/', (req, res) => {
  res.writeHead(302, {
    location: '/main'
  })
  res.end()
})

app.listen(3000, () => {
  console.log('服务器启动成功')
})