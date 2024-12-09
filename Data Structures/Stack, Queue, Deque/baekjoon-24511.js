var fs = require("fs");
var input = fs.readFileSync("./example.txt").toString().trim().split("\n");
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim();*/

const [N, M] = [input[0], input[3]];
const [A, B, C] = [
  input[1].split(" ").map(Number),
  input[2].split(" ").map(Number),
  input[4].split(" ").map(Number),
];

let queStack = B;
let answer = [];

for (let i = 0; i < N; i++) {
  if (A[i] === 0) {
    answer.push(B[i]);
  }
}

console.log(answer.reverse().concat(C).slice(0, M).join(" "));
