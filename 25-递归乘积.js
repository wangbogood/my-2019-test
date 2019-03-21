//5*4*3*2*1
function next(n){
    if(n===1){
        return 1
    }
    return n*next(n-1)
}
console.log(next(5))
