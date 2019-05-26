// 这是原生的写法
var increment = document.getElementById('increment');
var decrement = document.getElementById('decrement');
var counterValue = document.getElementById('counter-value');
let number = 0;
function render(){
    counterValue.innerHTML = number;
}
render();
increment.addEventListener('click',function(){
    number = number + 1;
    render()
});
decrement.onclick=function(){
    number--;
    render()
}



