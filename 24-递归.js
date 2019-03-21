var arr= [1,2,[3,4,[5,6,7,[8,9,10]]]];
var newarr = [];
function next(arr){
   
    for(var i =0;i<arr.length;i++){      
        if(arr[i] instanceof Array){
            next(arr[i])
        }else{
            newarr.push(arr[i])
        }
    }

    return newarr;
   
}
console.log(next(arr))
// next(arr)