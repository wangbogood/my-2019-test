var fs = require('fs');
// console.log(fs);
// fs.readFile('./1.txt','utf8',function(err,data){
//     console.log(data)
// })

function readFile(url){
    return new Promise((resolve,reject)=>{
        fs.readFile(url, 'utf8', function (err, data) {
           
           if(err){reject(err)};
           resolve(data)
        })
    })
}
readFile('./a.txt').then((data)=>{ 
    return readFile(data)
}).then(1,2).then(8,6).then().then((data)=>{console.log(data)})
.catch((err)=>{console.log(err)})


// var p = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log(p)
//     })
    
// })
// // console.log(p)