var menuList = [
    {pid:-1,path:'/cart',name:'购物车',id:1,auth:'cart'},
    {pid:1,path:'/cart/cart-list',name:'购物车列表',id:4,auth:'cart-list'},
    {pid:4,path:'/cart/cart-list/lottery',auth:'lottery',id:5,name:'彩票'},
    {pid:4,path:'/cart/cart-list/product',auth:'product',id:6,name:'商品'},
    {pid:-1,path:'/shop',name:'商店',id:2,auth:'shop'},
    {pid:-1,path:'/profile',name:'个人中心',id:3,auth:'profile'},
]
var arr = [];
function next(pid){
   return menuList.filter((item,index)=>{
        if(item.pid === pid){
            arr.push(item.auth);
            var children = next(item.id)
            item.children = children.length?children:null
            return true
        }
    })

}
var newArr = next(-1)
console.log(arr)