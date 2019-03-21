var http = require('http');
http.createServer(function(request,response){
    response.writeHead(202, {'Content-Type': 'text/plain'});
    response.end('hello node')
}).listen(4000,()=>{console.log('localhost://4000')})