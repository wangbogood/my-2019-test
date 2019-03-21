var express = require('express')
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();

// app.use(bodyParser.json({ type: 'application/*+json' }))
// app.use(bodyParser.urlencoded({extended:true}))

// app.use(bodyParser.json())
// var bodyFn = {
//     json:function(req,res,next){
//         var arr = [];
//         req.on('data',function(chunk){
//             arr.push(chunk)
//         })
//         req.on('end',function(){
//             console.log('文件读取完毕');
//             var buf = Buffer.from(...arr);
//             res.setHeader("Content-Type", "application/json;charset=utf-8"); 
//             req.body = buf
//         })
//         next()
//     }
// }
// app.use(bodyFn.json)
app.use(function(req,res,next){
    req.qq='马云';
    next()
})
app.post('/home',function(req,res){

    let arr = []
    req.on('data', chunk => {arr = [...arr, chunk]})
    req.on('end', () => {
      var qq = JSON.parse(Buffer.concat(arr).toString())
        res.end(JSON.stringify(qq))
    })

    // var arr = [];
    // req.on('data',function(chunk){
        // arr.push(chunk)
    // })
    // req.on('data', chunk => {arr = [...arr, chunk]})
    // req.on('end',function(){
    //     console.log('文件读取完毕');
        
    //     // var buf = Buffer.from(arr);
    //     var buf = JSON.parse(Buffer.concat(arr).toString())
    //     // res.setHeader("Content-Type", "application/json;charset=utf-8"); 
    //     console.log(buf)
    //     res.end(123);
    // })
  
})

app.get('/user',function(req,res){
    res.end('跨域成功kuayuchenggong')
})
app.listen(3000,function(){console.log('开始3000')})