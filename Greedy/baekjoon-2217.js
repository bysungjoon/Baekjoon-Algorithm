let input = require("fs")
  .readFileSync("./example.txt")
  .toString()
  .trim()
  .split("\n");
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");*/

let [N, ...weight] = input;
let answer = [];
weight.sort((a, b) => a - b);

weight.forEach((value) => {
  answer.push(value * N);
  N--;
});

console.log(Math.max(...answer));
