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

const T = input.shift();

let stack = [];
let answer = [];
let num = 1;

for (let i = 0; i < T; i++) {
  while (num <= input[i]) {
    answer.push("+");
    stack.push(num);
    num++;
  }

  let popNum = stack.pop();
  answer.push("-");

  if (popNum != input[i]) {
    answer = ["NO"];
    break;
  }
}

console.log(answer.join("\n"));
