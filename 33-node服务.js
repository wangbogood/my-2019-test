var http = require('http');
var url = require('url');
var server = http.createServer(function(req,res){
    if(req.method ==='GET'){
        res.end('请求成功')
    }
    // console.log(url.parse(req.url,true))
})
server.listen(3000,function(){console.log("3000 start")})