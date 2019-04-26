import React from './react'
import ReactDOM from './react-dom'
// 1 jsx转换成React.createElement 再返回react元素（js对象）
var element = React.createElement("h1", {
    className: "my",
    style: {
      color: 'red',
      background:'skyblue'
    },
    name:'wangbo'
  }, "nihao react",React.createElement('p',null,'我是p标签'));

// 2 函数组件
// function Welcome (){
//   return <h1>我是函数</h1>
// }
// var element = <Welcome hello={{name:'zhufeng'}}/>

// 3 class组件
// class Welcome extends React.Component{
//   constructor(props){
//     super(props)
//   }
//   render(){
//     return <h1 className='my' hello='666'>我是class类</h1>
//   }
// }
// var element = <Welcome  />

ReactDOM.render(element,document.getElementById('root'));  