let input = require("fs").readFileSync("./example.txt").toString().trim();
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");*/

let sum = 0;
let N = 0;

while (sum < input) {
  N++;
  sum += N;
  if (sum > input) {
    N--;
  }
}

console.log(N);
