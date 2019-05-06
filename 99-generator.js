function* gen(){
    var a = yield 111;
    console.log(a)
    var b = yield 222
}
var it = gen();
console.log(it.next())
console.log(it.next(666))
console.log(it.next())