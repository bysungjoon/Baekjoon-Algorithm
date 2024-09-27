let input = require("fs")
  .readFileSync("./example.txt")
  .toString()
  .trim()
  .split("\n");
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");*/

let A = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let B = input[2]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

let answer = 0;
for (let i = 0; i < Number(input[0]); i++) {
  answer += A[i] * B[i];
}

console.log(answer);
