const buf = Buffer.from('wangbo');
console.log(buf.toString('hex'))

const buf4 = Buffer.from([1, 2, 3]);
console.log(buf4)

const buf5 = Buffer.from('tést');
console.log(buf5)

const buf1 = Buffer.alloc(10,2);
console.log(buf1)

const buf3 = Buffer.allocUnsafe(10);
console.log(buf3)

buf = Buffer.alloc(3);
len = buf.write("www.runoob.com");
// console.log({}.toString.call(buf))
// console.log(buf.toString('utf8',0,2))
// console.log("写入字节数 : "+  len);

const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
console.log(buf)
const json = JSON.stringify(buf);
console.log(json)

var buffer1 = Buffer.from(('菜鸟教程'));
var buffer2 = Buffer.from(('www.runoob.com'));
var buffer3 = Buffer.concat([buffer1,buffer2],15);
console.log("buffer3 内容: " + buffer3.toString());


var buffer1 = Buffer.from('1');
var buffer2 = Buffer.from('2');
var result = buffer1.compare(buffer2);

if(result < 0) {
   console.log(buffer1 + " 在 " + buffer2 + "之前");
}else if(result == 0){
   console.log(buffer1 + " 与 " + buffer2 + "相同");
}else {
   console.log(buffer1 + " 在 " + buffer2 + "之后");
}

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
// console.log(buf1.length)
// console.log(buf1,buf2);
// buf1.copy(bufAll);
// buf2.copy(bufAll);
// console.log(bufAll.length)

