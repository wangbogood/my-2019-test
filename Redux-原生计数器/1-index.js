// import {createStore} from 'redux';
/**
 * @param 这是原生实现的方法
 */
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
