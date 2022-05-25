
// 被观察者 baby类
class Subject { // 被观察者 存放着所有的观察者
  constructor() {
    this.observers = [];
    this.state = '开心'
  }
  attach(observer) {
    this.observers.push(observer);
  }
  setState(state) {
    this.state = state;
    this.notify();
  }
  notify() {
    this.observers.map(observer => {
      observer.update(this.state);
    })
  }
}
// 观察者 parent类
class Observer { // 观察者一般会有一个办法
  constructor(name) {
    this.name = name;
  }
  update(state) {
    console.log(`${this.name}, the baby's state is ${state}`)
  }
}

let baby = new Subject(),
    father = new Observer('father'),
    mother = new Observer('mother');

baby.attach(father);
baby.attach(mother);
baby.setState('hungry');