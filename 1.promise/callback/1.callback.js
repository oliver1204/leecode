/**
 * 1. 高阶函数
 * 
 * 应用 AOP（面向切片编程）简单的回调函数 装饰器
 */

 // 1) AOP
Function.prototype.before = function(fn) {
  let _this = this;
  
  return function() { // newFn
    fn.call(_this, arguments);
    _this.apply(_this, arguments);
  }
}

let fn = (val) => {
  val.map((item) => {
    console.log(`old: ${item}`);
  })
}
let newFn = fn.before((val) => {
  console.log(`new: ${JSON.stringify(val)}`);
})
newFn(['123', '456', '789']);

// 2) loadsh _after() 在XX之后，才可以执行

function after(times, callback) {
  return function() {
    if(--times === 0) {
      callback();
    }
  }
}

let fn = after(2, function() {
  console.log('after')
})
fn();
fn();