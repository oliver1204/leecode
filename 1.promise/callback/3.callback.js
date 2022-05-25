// “发布”“订阅” 发布订阅函数都存在一个中介，例如 redux
// 观察者模式 的区别, 基于发布订阅，观察者和被观察者之间有关系

const fs = require('fs');
const path =require('path');

class Events {
  constructor() {
    this.events = [];
  }
  on(fn) {
    this.events.push(fn);
  }
  emit(data) {
    this.events.map(fn => {
      fn(data);
    })
  }
}

let e = new Events();
let arr = [];

e.on(function(data) {
  arr.push(data);
  if(arr.length === 2) {
    console.log(arr)
  }
})

fs.readFile(`${path.resolve(__dirname,'../age.txt')}`, 'utf8', (error, data) => {
  e.emit(data);
})

fs.readFile(`${path.resolve(__dirname,'../name.txt')}`, 'utf8', (error, data) => {
  e.emit(data);
})

