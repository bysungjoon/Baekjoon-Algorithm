var fs = require("fs");
var input = fs.readFileSync("./example.txt").toString().trim().split("\n");
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim();*/

class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
    this.prev = null;
  }
}
class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  pushFront(item) {
    const node = new Node(item);
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.size++;
  }
  pushBack(item) {
    const node = new Node(item);
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }
  popFront() {
    if (this.size === 0) return -1;
    const item = this.head.item;

    if (this.size > 1) {
      this.head = this.head.next;
      this.head.prev = null;
    } else if (this.size == 1) {
      this.head = null;
      this.tail = null;
    }
    this.size--;
    return item;
  }
  popBack() {
    if (this.size === 0) return -1;
    const item = this.tail.item;

    if (this.size > 1) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else if (this.size == 1) {
      this.head = null;
      this.tail = null;
    }
    this.size--;
    return item;
  }
  getSize() {
    return this.size;
  }
  Front() {
    return this.head ? this.head.item : -1;
  }
  Back() {
    return this.tail ? this.tail.item : -1;
  }
}

function Solution(input) {
  const [N, ...commands] = input;
  let deque = new Deque();
  let answer = [];

  for (let i = 0; i < commands.length; i++) {
    const [num, x] = commands[i].split(" ").map(Number);
    switch (num) {
      case 1:
        deque.pushFront(x);
        break;
      case 2:
        deque.pushBack(x);
        break;
      case 3:
        answer.push(deque.popFront());
        break;
      case 4:
        answer.push(deque.popBack());
        break;
      case 5:
        answer.push(deque.getSize());
        break;
      case 6:
        answer.push(deque.getSize() === 0 ? 1 : 0);
        break;
      case 7:
        answer.push(deque.Front());
        break;
      case 8:
        answer.push(deque.Back());
        break;
    }
  }
  return answer.join("\n");
}

const answer = Solution(input);
console.log(answer);
