var fs = require("fs");
var input = fs
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n")
  .map(Number);*/

class Maxheap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    let index = this.heap.length - 1;
    let parent = Math.floor((index - 1) / 2);

    while (parent >= 0 && this.heap[parent] < this.heap[index]) {
      [this.heap[parent], this.heap[index]] = [
        this.heap[index],
        this.heap[parent],
      ];
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }

  pop() {
    if (this.heap.length == 0) return 0;
    if (this.heap.length == 1) return this.heap.pop();

    const max = this.heap[0];
    this.heap[0] = this.heap.pop();

    let index = 0;
    while (true) {
      let left = index * 2 + 1;
      let right = index * 2 + 2;
      let currentInex = index;

      if (left < this.heap.length && this.heap[left] > this.heap[currentInex]) {
        currentInex = left;
      }
      if (
        right < this.heap.length &&
        this.heap[right] > this.heap[currentInex]
      ) {
        currentInex = right;
      }

      if (currentInex == index) break;

      [this.heap[index], this.heap[currentInex]] = [
        this.heap[currentInex],
        this.heap[index],
      ];
      index = currentInex;
    }

    return max;
  }
}

const heap = new Maxheap();
const answer = [];

for (let i = 1; i < input.length; i++) {
  if (input[i] == 0) {
    answer.push(heap.pop());
  } else {
    heap.push(input[i]);
  }
}

console.log(answer.join("\n"));
