var EventEmitter = require('events').EventEmitter; 
var event = new EventEmitter(); 
event.on('some_event', function() { 
    console.log('some_event 事件触发'); 
}); 
event.addListener('some_event', function(a,b){
    console.log(666,a,b)
})

var arr = 	event.listeners('some_event');
var num = event.listenerCount('some_event');
console.log(num)
// console.log(arr)
setTimeout(function() { 
    var res = event.emit('some_event',111,222); 
    // console.log(res)
}, 1000); 


