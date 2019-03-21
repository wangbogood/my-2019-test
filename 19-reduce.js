var arr = [1,2,3];

var res = arr.reduce(function(total, currentValue, currentIndex, arr){
    //    console.log(total)
      return total+currentValue
},0)
console.log(res)