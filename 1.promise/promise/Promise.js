/**
 * base
 * 1) promise是一个承诺，初始状态是pending 成功状态 fulfilled 失败状态 rejected
 * 2) executor 会立即执行，resolve，reject都是函数
 * 3）每个promise都有一个then方法，then方法接收两个函数，分别代表成功和失败后的回调函数
 * 4）一旦成功就不会再次失败，同样的，一旦失败也不会再成功
 */

/**
 * 进阶1
 * 1) promise 可以处理异步函数处理，防止回调地狱
 * 2） 一个 promise 可以有多个then函数
 */

 /**
  * promise 有一个特点，一旦成功则无法再失败，因此每次必须返回一个新的promise
  */
const PENDING = 'pending';
const SUCCESS = 'fulfilled';
const FAILED = 'rejected';

class Promise {
  constructor(executor) {
    this.state = PENDING;
    this.value = undefined;
    this.reason = undefined;
     /**
     * 依赖发布订阅模式，将成功失败依次放入数组中
     * 等待用户改变状态，依次更新
     */
    this.fulfilledCallback = [];
    this.rejectedCallback = [];
   
    let resolve = (value) => {
      if(this.state === PENDING) {
        this.state = SUCCESS;
        this.value = value;
        this.fulfilledCallback.map(fn => fn());
      }
    };
    let reject = (reason) => {
      if(this.state === PENDING) {
        this.state = FAILED;
        this.reason = reason;
        this.rejectedCallback.map(fn => fn());
      }
    }

    try {
      executor(resolve, reject);
    } catch (e) {
      this.fulfilledCallback.map(fn => fn());
    }
  }
  
  
  then(onFulfilled, onRejected) {
    let promise2 = new Promise((resovle, reject) => {
      if(this.state === PENDING) { // 异步逻辑
        if(onFulfilled) {
          this.fulfilledCallback.push(() => {
            onFulfilled(this.value);
          });
        } 
        if(onRejected){
          this.rejectedCallback.push(() => {
            onRejected(this.reason);
          });
        }
      } else if(this.state === SUCCESS) {
        try {
          let x = onFulfilled(this.value);

          resolve(x)
        } catch (err) {
          reject(x)
        }
        
      } else if(this.state === FAILED) {
        onRejected(this.reason);
      } 
    })
    
    // jq html().css().heigth().. 返回 同一个 this 即可实现
    // return this;

    // 但是 promise 有一个特点，一旦成功则无法再失败，因此每次必须返回一个新的promise
    return promise2;
  }
}
module.exports = Promise;