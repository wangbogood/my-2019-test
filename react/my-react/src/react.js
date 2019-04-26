class Component{
    static isTrue = true
}
// 将('h1',{className: "my",style:{color:'red'}}, "nihao react") 转化为react元素 如 {type:'h1',props:{className:'my'},styles:{color:'red'},children:'nihao react'}
function createElement(type,config,children){
    let props = {};
    var item;
    for(item in config){
        props[item] = config[item]
    }
    
    var len = (arguments.length-2);
    if(len===1){
        props.children = children
    }else if(len>1){
        props.children = Array.from(arguments).slice(2)
    }

   return {
       type,
       props
   }
    

}


// var a = createElement('h1',{className: "my",style:{color:'red'}}, "nihao react")
// console.log(a)
export default {createElement,Component}

// var element = React.createElement("h1", {
//     className: "my",
//     style: {
//       color: 'red'
//     }
//   }, "nihao react ");

