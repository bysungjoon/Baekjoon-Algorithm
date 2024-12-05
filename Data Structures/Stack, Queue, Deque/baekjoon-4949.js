var fs = require("fs");
var input = fs.readFileSync("./example.txt").toString().trim().split("\n");
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");*/

for (let i = 0; i < input.length - 1; i++) {
  let stack = [];
  let isBalanced = true;
  let str = input[i];

  for (let j = 0; j < str.length; j++) {
    let char = str[j];

    if (char === "(" || char === "[") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.length > 0 && stack[stack.length - 1] == "(") {
        stack.pop();
      } else {
        isBalanced = false;
        break;
      }
    } else if (char === "]") {
      if (stack.length > 0 && stack[stack.length - 1] == "[") {
        stack.pop();
      } else {
        isBalanced = false;
        break;
      }
    }
  }

  if (isBalanced && stack.length === 0) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
