function render(element,parentNode){
    //如果是字符串直接把他转换成 文本节点插入父节点；
    if(typeof element === 'string'){
        return parentNode.appendChild(document.createTextNode(element))
    }
    var type = element.type;
    var props = element.props;
    var isTrue = type.isTrue;
    //如果传的是 函数组件
    if(!isTrue && typeof element.type === 'function' ){
           var res = type(props);
           type = res.type;
           props = res.props;
           var node = document.createElement(type);
    }else if(type.isTrue){ //如果传的是class组件
       var res = new type(props);
       var resClass = res.render()
       type = resClass.type;
       props = resClass.props;
       var node = document.createElement(type);
    }else{
        //如果传入的是 React.ctreatElement('h1',null,'nihao')
        var node = document.createElement(type);
    }
    
    // 创建了 node节点之后 往节点上添加各种属性
    var propsName;
    for(propsName in props){
       if(propsName === 'className'){ // 如果是class
            node.className = props[propsName];
       }else if(propsName === 'style'){  //如果是样式
            var styles = props[propsName];
            var keys = Object.keys(styles);
            var arr =  keys.map((item)=>{
                return `${item}:${styles[item]}`
            }).join(';')
            node.style.cssText = arr;
       }else if(propsName === 'children'){ //插入的内容文本，如果是对象则再循环判断 是否数组里面有对象，如果有递归调用render
            var children = props.children;
            if(typeof children === 'string'){
                node.appendChild(document.createTextNode(children));
            }else if(Array.isArray(children)){
                children.forEach((item)=>{
                    if(typeof item === 'string'){
                        node.appendChild(document.createTextNode(item));
                    }else{
                        render(item,node)
                    }
                })
            }
       }else{
            
            node.setAttribute(propsName,props[propsName])
        }
    }
    //添加属性  
    parentNode.appendChild(node)
}

export default {render}



var obj = {
    type:'h1',
    props:{
        className:'my',
        style:{
            color:'red'
        },
        children:'nihao react 66666'
    }
}