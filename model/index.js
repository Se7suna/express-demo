const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/student', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(db => {
  const { name, host, port } = db.connections[0]
  console.log(`${name}连接成功 ${host}:${port}`)
}).catch(err => {
  console.log('数据库连接失败:', err.message)
})