var fs = require("fs");
var input = fs
  .readFileSync("./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");*/

for (let i = 0; i < input.length - 1; i++) {
  let answer = 0;
  let N = input[i];
  for (let j = N + 1; j <= 2 * N; j++) {
    if (getGCD(j)) {
      answer++;
    }
  }
  console.log(answer);
}

function getGCD(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
