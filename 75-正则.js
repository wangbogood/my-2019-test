// var reg = /wangbo/g;
// console.log(reg.lastIndex);
// reg.test('woshiwangbo');
// console.log(reg.lastIndex);
// console.log(reg.source);

// var res = reg.exec('woshiwangbo');
// console.log(res)

// var res = /_(wangbo)/.exec('_wangbo_wangbo');
// console.log(res)

// var s = '_x_x';
// var r = /_(x)/;

// console.log(r.exec(s))

// var reg = /a/g;
// var str = 'abc_abc_abc';

// var r1 = reg.exec(str);
// console.log(r1)
// console.log(reg.lastIndex)

// var r2 = reg.exec(str);
// console.log(reg.lastIndex)


// var res = 'abc_abc_abc'.match(/a/g);
// console.log(res)

// var res = '666abc_abc_abc'.search(/a/g);
// console.log(res)

// var res = '666abc_abc_abc'.replace(/a/g,'888');
// console.log(res)

// var res = '666abc_abc_abc'.replace('a','888'); // 不加全局只替换一个
// console.log(res)

var res = '666abc_abc_abc'.replace(/a/g,function(a,b,c){
//    return data += data
console.log(a,b,c)
});
// console.log(res)