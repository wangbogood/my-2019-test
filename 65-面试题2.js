// 给定两个版本v1，v2，如v1>v2，返回1， 如v1<v2,返回-1，否则返回0;
// v1=‘0.1.1’,v2='0.1.2'返回 -1 ; v1 = '1.2' v2='1.1.13' 返回1;

// var v1 = '0.1.1';
// var v2 = '0.1.2';
v1 = '1.2' 
v2 = '1.1.13'
function zhuanArr (item) {
    return item.split('.');
};
function panduan (a, b) {
    if(a === b){
        return 0 ;
    }
    var a = zhuanArr(a);
    var b = zhuanArr(b);
    for(var i = 0; i < a.length; i++){
        if (a[i]>b[i]) {
            return 1
        }
        else if (a[i]<b[i]) {
            return -1
        }
    }

}
console.log(panduan(v1,v2))