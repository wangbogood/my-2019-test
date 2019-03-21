var http = require('http');
var url = require('url');
var querystring = require('querystring');
var server = http.createServer(function(req,res){
    var arr = []
    req.getCookie = function(key){
        var cookies = querystring.parse(req.headers.cookie,'; ') || {};
        if(cookies){
            return key?cookies[key]:cookies;
        }
    }
    res.setCookie = function(key,value,option = {}){
        var otpArr = [];
     
        if(option.httpOnly){
            otpArr.push('httpOnly='+option.httpOnly);
        }
        if(option.maxAge){
            otpArr.push('max-age='+option.maxAge);
        }
        arr.push(`${key}=${value}; `+otpArr.join('; '))
        res.setHeader('Set-Cookie',arr)
    }
    if(req.url ==='/write'){
        // res.setHeader('Set-Cookie',['name=wangbo; httpOnly=true; max-age=60','age=18; httpOnly=1; max-age=60']);
        res.setCookie('say','hello node',{httpOnly:true,maxAge:100})
        res.setCookie('nihao','qq',{maxAge:100})
        res.setHeader('Content-Type','text/html;charset=utf8');
        res.end('设置成功')
    }
    if(req.url ==='/read'){    
        console.log(req.getCookie())
        res.setHeader('Content-Type','text/html;charset=utf8');
        res.end('读取成功')
    }
   
   
})
server.listen(3030)