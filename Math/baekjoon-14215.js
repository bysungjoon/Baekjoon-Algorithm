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
  .split("\n")
  .map(Number);*/

input.sort((a, b) => a - b);

let [A, B, C] = input;
let answer = 0;

if (A + B > C) {
  console.log(A + B + C);
} else {
  console.log(2 * (A + B) - 1);
}
