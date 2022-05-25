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
  get(index) {
    return this.getCurrentNode(index).val;
  }
  addAtHead(val) {
    if (!this.size) {
      this.header = new Node(val, null);
    } else {
      let next = this.header;
      this.header = new Node(val, next);
    }
    this.size++;
  }
  addAtTail(val) {
    if (this.header) {
      let lastNode = this.getCurrentNode(this.size - 1);
      let node = new Node(val, null);
      lastNode.next = node;
    } else {
      this.header = new Node(val, null);
    }
    this.size++;
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
  deleteAtIndex(index) {
    if (index > this.size - 1) return -1;
    if (index === 0) {
      this.header = this.getCurrentNode(1);
    } else if (index === this.size - 1) {
      let preNode = this.getCurrentNode(index - 1);
      preNode.next = null;
    } else {
      let preNode = this.getCurrentNode(index - 1);
      let currentNode = this.getCurrentNode(index);
      preNode.next = currentNode.next;
    }
    this.size--;
  }
}

let list = new MyLinkedList();
list.addAtHead(4);
console.log(list);
list.get(1);
console.log(list);
list.addAtHead(1);
console.log(list);
list.addAtHead(5);
console.log(list);
list.deleteAtIndex(3);
console.log(list);
list.addAtHead(7);
console.log(list);

/**
 * ["MyLinkedList","addAtHead","get","addAtHead","addAtHead","deleteAtIndex","addAtHead","get","get","get","addAtHead","deleteAtIndex"]
[[],[4],[1],[1],[5],[3],[7],[3],[3],[3],[1],[4]]
 */
