var promise = new Promise((resolve)=>{
    console.log(1);
    setTimeout(() => {
        console.log(2)
    }, 1000);
    resolve(20)
})
promise.then((value)=>console.log(3)).catch((err)=>{console.log(4)});
setTimeout(()=>console.log(5),1000)

// for(var i = 0;i<10;i++){
//     setTimeout(()=>{
//         console.log(i)
//     })
// }

// var a ={
//     b(){
//         console.log(this)
//     }
// }
// a.b()
// var c = a.b();
// c()


