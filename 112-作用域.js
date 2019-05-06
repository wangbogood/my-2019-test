function func(fn){
    var a = 1;
    var b =9;
    fn(a,b)
}
var a = 10;
var b = 90;
function fn(a,b){
    console.log(a+b)
}
func(fn)