class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}
class MyLinkedList {
  constructor() {
    this.header = null;
    this.size = 0;
  }
  getCurrentNode(index) {
    if (index < 0 || index > this.size - 1) return -1;
    let currentNode = this.header;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  addAtIndex(index, val) {
    if (index <= 0) {
      let header = this.header;
      let node = new Node(val, header);
      this.header = node;
    } else {
      let preNode = this.getCurrentNode(index - 1);
      let node = new Node(val, preNode.next);
      preNode.next = node;
    }
    this.size++;
  }
  /**
   * 递归方式,从头部开始两两交换指针指向
   */

  // reverseList() {
  //   function reverse(head) {
  //     if (head == null || head.next == null) return head;

  //     let newHeader = reverse(head.next);
  //     head.next.next = head;
  //     head.next = null;
  //     return newHeader;
  //   }
  //   return reverse(this.header);
  // }

  /**
   * 非递归方式，创建一个空链表（链表2），一次把老的链（链表1）表头部放到新链表的头部
   */
  reverseList() {
    let head = this.header;
    if (head == null || head.next == null) return head;
    let newHeader = null;
    while (head) {
      let temp = head.next; // 先保存链表1的第二个节点
      head.next = newHeader; // 将链表2的第一个节点指向null
      newHeader = head; // 将链表1的第一个节点链表2的头
      head = temp; // 链表1的第二个节点变为头
    }
    return newHeader;
  }
}

let list = new MyLinkedList();
list.addAtIndex(0, 1);
list.addAtIndex(1, 2);
list.addAtIndex(2, 3);
console.log(list);
console.log(list.reverseList());
