var obj = {
    a:{
        b:()=>{
            console.log(this)
        },
        c:'666'
    }
}
obj.a.b()

//箭头函数内部的this会找到最上级  window