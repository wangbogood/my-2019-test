//被观察者Subject   观察者Observer 
// 在观察者模式中，Subject 对象拥有添加、删除和通知一系列 Observer 的方法等等，而 Observer 对象拥有更新方法等等。
// 在 Subject 对象添加了一系列 Observer 对象之后，Subject 对象则维持着这一系列 Observer 对象，当有关状态发生变更时
//  Subject 对象则会通知这一系列 Observer 对象进行更新。

function Subject(){ //被观察者
    this.Observer = [];
    this.setData = '死数据'
}
Subject.prototype = {
    add:function(fn){
        this.Observer.push(fn)
    },
    remove:function(fn){  
        this.Observer.forEach((item,index)=>{       
            if(item === fn){
                this.Observer.splice(index,1)
            }
        })
    },
    notify:function(data){
        this.setData = data
        this.Observer.forEach((item,index)=>{
            item.updata(data)
        })  
    }
}
function Observer(name){ //观察者
    this.name = name
}
Observer.prototype.updata = function(data){
    console.log(this.name+'-------'+'监听到更新了'+'-------'+data)
}
var s = new Subject()
var o1 = new Observer('淘宝')
var o2 = new Observer('蚂蚁金服')
var o3 = new Observer('支付宝')
s.add(o1)
s.add(o2)
s.add(o3)
s.remove(o1)
s.notify('数据改变了123')
