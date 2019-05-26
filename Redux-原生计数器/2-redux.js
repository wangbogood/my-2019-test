


import qq from './node_modules/redux/dist/redux'
console.log(qq)
var store = createStore(reducer);
function reducer(state=0,action){
    switch(action){
        case 'increment':
        state = state+1
        case 'decrement':
        state = state+1
        default:
        state
    }
}
var increment = document.getElementById('increment');
var decrement = document.getElementById('decrement');
var counterValue = document.getElementById('counter-value');
let num = 0;
counterValue.innerHTML = 0
increment.addEventListener('click',function(){
    counterValue.innerHTML = ++num
})
decrement.addEventListener('click',function(){
    counterValue.innerHTML = --num
})
