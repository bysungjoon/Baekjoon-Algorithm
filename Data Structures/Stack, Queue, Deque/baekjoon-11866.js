var fs = require("fs");
var input = fs.readFileSync("./example.txt").toString().trim();
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");*/

const [N, K] = input.split(" ").map(Number);

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
    if (this.size > 1) {
      const item = this.head.item;
      const newHead = this.head.next;
      this.head = newHead;
      this.size--;
      return item;
    } else {
      const item = this.head.item;
      this.head = null;
      this.tail = null;
      this.size -= 1;
      return item;
    }
  }
  getSize() {
    return this.size;
  }
}

function Solution(n, k) {
  const queue = new Queue();

  for (let i = 1; i <= n; i++) {
    queue.push(i);
  }

  let cnt = 1;
  let answer = [];
  while (queue.getSize() > 0) {
    if (cnt % k != 0) {
      queue.push(queue.pop());
    } else {
      answer.push(queue.pop());
    }
    cnt++;
  }
  return answer;
}

let answer = Solution(N, K);
console.log(`<${answer.join(", ")}>`);
