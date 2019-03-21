// var p = new Promise((resolve,reject)=>{
//     resolve('成功');
// })
// console.log(p);

async function fn(){
    return new Promise((resolve,reject)=>{
        resolve('成功');
    })
}
fn().then(data=>console.log(data))