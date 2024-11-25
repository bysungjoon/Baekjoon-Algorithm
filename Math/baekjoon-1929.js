var fs = require("fs");
var input = fs
  .readFileSync("./example.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");*/

const [M, N] = input;
let answer = [];

for (let i = M; i <= N; i++) {
  if (getResult(i)) {
    answer.push(i);
  }
}

console.log(answer.join("\n"));

function getResult(n) {
  if (n < 2) {
    return false;
  }
  for (let j = 2; j <= Math.sqrt(n); j++) {
    if (n % j == 0) {
      return false;
    }
  }
  return true;
}
