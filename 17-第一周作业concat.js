Buffer.myconcat=function(arr,sliceNum){
    var len = 0;
    for(var i=0;i<arr.length;i++){
        len += arr[i].length;
    }
    var bufAll = Buffer.alloc(len);
    arr.forEach((item,index,arr)=>{
        arr[index].copy(bufAll,index===0?0:arr[index-1].length)
    })
    if(sliceNum){
        return bufAll.slice(0,sliceNum)
    }else{
        return bufAll;
    }
   
}

var buf1 = Buffer.from('王');
var buf2 = Buffer.from('波');
var res = Buffer.myconcat([buf1,buf2],3)
console.log(res.toString())