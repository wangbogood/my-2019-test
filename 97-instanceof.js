// var arr = [1,2,3]
// var isBoor = arr instanceof Object
// console.log(isBoor)


// var fn = function(){

// }

// var num = 123;
// var isBoor = num instanceof Number
// console.log(isBoor)

// console.log(Object.prototype.__proto__)

// var n = 0;
// while(n<10){
//     console.log('我是：'+n);
//     if(n === 5){
//         return true
//     }
//     n++
// }


// var obj = {
//     a:1,
//     b:2,
//     c:3,
//     d:4
// }



// Object.defineProperty(obj, "key", {
//     enumerable: true,
//     configurable: false,
//     writable: false,
//     value: "static"
//   });

// for (key in obj){
//     // console.log(key);
//     // if(key === 'c'){
//     //     return 
//     // }
    
// }
// console.log(obj)

// function Person (){
    
// }
// Person.prototype.say = function(){
//     console.log('hello')
// }

// {
//     const a = 111
// }
// console.log(a)


// var obj = {
//     a:'666',
//     b:function(){
//        return ()=>{
//            console.log(this)
//        }
//     }
// }
// var fn = obj.b()
// fn()

// var obj = {
//     a:1,
//     b:2
// }
// var arr = [1,2,3]
// // console.log(Object.prototype.toString.call(obj))

// // console.log({}.toString.call(obj))

// console.log([].push.call(arr,4))
// console.log(arr)


var obj = {a:1,b:2};
for(key in obj){
    console.log(key)
}

// console.log( obj.constructor ===  obj.__proto__.constructor)
