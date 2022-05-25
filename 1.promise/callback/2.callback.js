/**
 * 应用：
 * ajax => 异步编程
 * eg: 
 * name: 返回 name
 * age: 返回 age
 * 
 * 要求： 同时请求 name、age
 */

const fs = require('fs');
const path =require('path');

fs.readFile(`${path.resolve(__dirname,'../age.txt')}`, 'utf8', (error, data) => {
  fn(data);
})

fs.readFile(`${path.resolve(__dirname,'../name.txt')}`, 'utf8', (error, data) => {
  fn(data)
})

function after(times, fn) {
  let arr = [];
  return function(data) {
    arr.push(data)
    if(--times === 0) {
      fn(arr);
    }
  }
}

let fn = after(2, function(data) {
  console.log(data)
})
