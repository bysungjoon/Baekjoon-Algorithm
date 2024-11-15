var fs = require("fs");
var input = fs.readFileSync("./example.txt").toString().trim();
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n")
  .map(Number);*/

let M = 0;
let answer = 0;

for (let i = 1; i <= input; i++) {
  let arr = i.toString().split("").map(Number);
  M = i + arr.reduce((acc, cur) => acc + cur);
  if (input == M) {
    answer = i;
    break;
  }
}

console.log(answer != 0 ? answer : 0);
