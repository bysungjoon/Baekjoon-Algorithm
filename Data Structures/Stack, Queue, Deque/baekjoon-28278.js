var fs = require("fs");
var input = fs.readFileSync("./example.txt").toString().trim().split("\n");
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim();*/

const [N, ...arr] = input;
let stack = [];
let answer = [];

for (let i = 0; i < arr.length; i++) {
  let command = arr[i].split(" ").map(Number);
  switch (command[0]) {
    case 1:
      stack.push(command[1]);
      break;
    case 2:
      if (stack.length > 0) {
        answer.push(stack[stack.length - 1]);
        stack.pop();
      } else {
        answer.push(-1);
      }
      break;
    case 3:
      answer.push(stack.length);
      break;
    case 4:
      if (stack.length > 0) {
        answer.push(0);
      } else {
        answer.push(1);
      }
      break;
    case 5:
      if (stack.length > 0) {
        answer.push(stack[stack.length - 1]);
      } else {
        answer.push(-1);
      }
      break;
  }
}

console.log(answer.join("\n"));
