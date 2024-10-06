let input = require("fs")
  .readFileSync("./example.txt")
  .toString()
  .trim()
  .split("\n");
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");*/

const N = input.shift();
let stack = [];

for (let i = 0; i < N; i++) {
  const order = input[i].split(" ");

  switch (order[0]) {
    case "push":
      stack.push(order[1]);
      break;
    case "pop":
      console.log(stack.length == 0 ? -1 : stack[stack.length - 1]);
      stack.pop();
      break;
    case "size":
      console.log(stack.length);
      break;
    case "empty":
      console.log(stack.length == 0 ? 1 : 0);
      break;
    case "top":
      console.log(stack.length == 0 ? -1 : stack[stack.length - 1]);
      break;
  }
}
