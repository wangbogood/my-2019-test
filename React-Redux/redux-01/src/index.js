// 这是原生的写法
import {createStore} from 'redux';
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
function reducer(state=666,action){
    switch(action.type){
       case 'INCREMENT':
       return state + 1;
       case 'DECREMENT':
       return state - 1;
       default:
       return state;
    }
}
var store = createStore(reducer);
console.log(store)
var increment = document.getElementById('increment');
var decrement = document.getElementById('decrement');
var counterValue = document.getElementById('counter-value');

function render(){
    counterValue.innerHTML = store.getState();
}
store.subscribe(render)
render();
increment.addEventListener('click',function(){
    store.dispatch({
        type:'INCREMENT'
    })
});
decrement.onclick=function(){
    store.dispatch({
        type:'DECREMENT'
    })
}



