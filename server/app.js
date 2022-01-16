// 导入express模块
const express = require('express')
    // 创建express服务器实例
const app = express()

// 调用listen方法，指定端口并启动服务器
app.listen(1111, () => {
        console.log('服务器开启成功，端口号1111');
    })
    // 允许接收json格式
app.use(express.json())
    // 允许接收url格式
app.use(express.urlencoded({ extended: false }))
    // 所有的请求由中间件验证，验证权限后放行
app.use((req, res, next) => {
    // 设置允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*')
        // 设置允许前端添加请求头信息
    res.setHeader('Access-Control-Allow-Headers', '*')
    next()
})


// 暴露
exports.app = app