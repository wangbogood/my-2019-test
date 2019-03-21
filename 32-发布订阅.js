//  发布订阅模式指的是希望接收通知的对象（Subscriber）基于一个主题通过自定义事件订阅主题，
// 被激活事件的对象（Publisher）通过发布主题事件的方式通知各个订阅该主题的 Subscriber 对象。 

function Event(){
    this.obj = {}
}
Event.prototype = {
    on:function(name,fn){
       if(!this.obj[name]){
         this.obj[name] =[fn]
       }else{
        this.obj[name].push(fn) 
       }
            
    },
    emit:function(){
        var args = arguments;
        var key = [].slice.call(arguments)[0];
        var arr = [].slice.call(arguments).splice(1)
        for(item in this.obj){     
           if(key === item){
                var fnArr = this.obj[key]
           }
        }
        if(!fnArr)return;
        fnArr.forEach(fn => {
            fn.apply(this,arr)
        });
        
    },
    remove:function(key){
        delete this.obj[key]
    }
}

var e = new Event()
e.on('say',function(){
    console.log('我是say说')
})
e.on('say',function(){
    console.log('我还要说哈哈哈')
})
e.on('say',function(item){
    console.log('说个没玩'+item)
})
e.on('run',function(item){
    console.log('我是run跑'+item)
})
// e.remove('run')
e.emit('run','比曹操还快')
e.emit('say','我就是喜欢说')
