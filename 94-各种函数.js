function cached (fn) {
    var cache = Object.create(null);
    return (function cachedFn (str) {
      var hit = cache[str];
      return hit || (cache[str] = fn(str))
    })
  }


  var camelizeRE = /6/g;
  var camelize = cached(function (str) {
    return str.replace(camelizeRE, function () { console.log(arguments) })
  });
  
  var res = camelize('my6asd6fdg6fgyfg')
//   console.log(res)