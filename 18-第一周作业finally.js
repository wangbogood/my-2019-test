Promise.prototype.myfinally = function(fn){
   return this.then(()=>{
       fn()
       console.log(1)}
       ).catch((err)=>{
           fn()
           console.log(err)
       })
}
var p = new Promise((resolve,reject)=>{
    resolve('成功了')
    // reject('失败了')
})

p.then((data)=>{
        console.log(data)
        return data
    }).then((data)=>{console.log('2-----'+data)})
// p.then((data)=>{
//     console.log(data)
// }).catch((err)=>{console.log(err)}).myfinally(()=>{console.log('我是finally')})