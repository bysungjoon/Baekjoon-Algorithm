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

const [N, ...num] = input;
let answer = 0;

for (let i = 0; i < num.length; i++) {
  for (let j = num[i]; ; j++) {
    if (getResult(j)) {
      answer = j;
      break;
    }
  }
  console.log(answer);
}

function getResult(n) {
  if (n < 2) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

console.log(Math.sqrt(8));
