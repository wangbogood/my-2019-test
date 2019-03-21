var fs = {
    readFile:function(url,cb){
        setTimeout(()=>{
            if(url==='lujing1'){
                cb('我是路径1的数据')
            }else{
                cb('我是其他数据')
            }
           
        },1000)
    }
};



fs.readFile('lujing1',function(data){console.log(data)})