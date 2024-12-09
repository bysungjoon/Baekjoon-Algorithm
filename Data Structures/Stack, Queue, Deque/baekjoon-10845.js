var fs = require("fs");
var input = fs.readFileSync("example.txt").toString().trim().split("\n");
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
    if (this.size == 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }
  pop() {
    if (this.size == 0) {
      return -1;
    }
    const item = this.head.item;
    if (this.size == 1) {
      this.head = null;
      this.tail = null;
    } else if (this.size > 1) {
      this.head = this.head.next;
    }
    this.size--;
    return item;
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

function Solution(commands) {
  let answer = [];
  let queue = new Queue();

  for (let i = 0; i < commands.length; i++) {
    let [command, num] = commands[i].split(" ");
    switch (command) {
      case "push":
        queue.push(num);
        break;
      case "pop":
        answer.push(queue.pop());
        break;
      case "size":
        answer.push(queue.getSize());
        break;
      case "empty":
        answer.push(queue.empty());
        break;
      case "front":
        answer.push(queue.front());
        break;
      case "back":
        answer.push(queue.back());
        break;
    }
  }
  return answer.join("\n");
}

let answer = Solution(input);
console.log(answer);
