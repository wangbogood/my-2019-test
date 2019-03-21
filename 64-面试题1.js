// 给定数组a，调整其中元素的顺序，使奇数在前偶数在后，举例a=【1,2,3,4】 返回【1,3,2,4】

var a = [1,5,3,6,8,10,7,4,9];
var newArrA = [];
var newArrB = [];
function paixu (item) {
   return item.sort(function(a,b){
        return a - b
    })
}
for(var i = 0; i < a.length; i++){
    if (a[i]%2 !== 0) {
        newArrA.push(a[i]);
    }
}

for(var i = 0; i < a.length; i++){
    if (a[i]%2 === 0) {
        newArrB.push(a[i])
    }
}
var arr = [...paixu(newArrA),...paixu(newArrB)];
console.log(arr)