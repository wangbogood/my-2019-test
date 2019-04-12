var express = require('express');
var proxy = require('http-proxy-middleware');
var app = express();

// app.use(express.static(__dirname))
app.use(express.static('E:/wangbo/ai-web/'))
app.use('/api/*', proxy({
    // app.use('/', proxy({
    // https://sp0.baidu.com/
    target: 'http://10.16.87.131:8686',
    // target: 'http://47.100.16.144:8686',
    // target:'http://47.100.16.144:8686/',
    // target: 'https://sp0.baidu.com',
    changeOrigin: true,
    pathRewrite: {
        '^/api/' : '/' // 重写请求，api/解析为/
      },
}));

app.listen(3002,()=>{
    console.log('3002')
});