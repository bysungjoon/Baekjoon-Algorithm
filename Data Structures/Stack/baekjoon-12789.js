var fs = require("fs");
var input = fs.readFileSync("./example.txt").toString().trim().split("\n");
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");*/

let arr = input[1].split(" ").map(Number);
let stack = [];
let num = 1;

arr.forEach((value) => {
  if (value === num) {
    num++;
  } else {
    stack.push(value);
  }

  while (stack[stack.length - 1] == num) {
    stack.pop();
    num++;
  }
});

console.log(stack.length === 0 ? "Nice" : "Sad");
