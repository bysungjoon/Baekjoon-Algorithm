var fs = require("fs");
var input = fs.readFileSync("./example.txt").toString().trim().split("\n");
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");*/

const [N, ...commands] = input;

class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(item) {
    const node = new Node(item);
    if (!this.head) {
      this.head = node;
      this.head.next = this.tail;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    this.size++;
  }

  pop() {
    if (this.size > 2) {
      const item = this.head.item;
      const newHead = this.head.next;
      this.head = newHead;
      this.size -= 1;
      return item;
    } else if (this.size == 2) {
      const item = this.head.item;
      const newHead = this.head.next;
      this.head = newHead;
      this.tail = newHead;
      this.size -= 1;
      return item;
    } else if (this.size == 1) {
      const item = this.head.item;
      this.head = null;
      this.tail = null;
      this.size -= 1;
      return item;
    } else {
      return -1;
    }
  }

  getSize() {
    return this.size;
  }
  empty() {
    return this.size == 0 ? 1 : 0;
  }
  front() {
    return this.head ? this.head.item : -1;
  }
  back() {
    return this.tail ? this.tail.item : -1;
  }
}

function Solution(n, commands) {
  let arr = [];
  const queue = new Queue();

  for (let i = 0; i < n; i++) {
    let command = commands[i].split(" ");
    switch (command[0]) {
      case "push":
        queue.push(+command[1]);
        break;
      case "pop":
        arr.push(queue.pop());
        break;
      case "size":
        arr.push(queue.getSize());
        break;
      case "empty":
        arr.push(queue.empty());
        break;
      case "front":
        arr.push(queue.front());
        break;
      case "back":
        arr.push(queue.back());
        break;
    }
  }
  return arr.join("\n");
}

const answer = Solution(N, commands);
console.log(answer);
