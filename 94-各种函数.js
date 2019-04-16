function def (obj, key, val, enumerable) {
  return Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}
var obj = {}
console.log(def(obj,'qq',function ma(){console.log(123)}))
console.log(obj)