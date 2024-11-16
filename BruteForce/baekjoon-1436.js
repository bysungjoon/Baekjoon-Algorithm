var fs = require("fs");
var input = fs.readFileSync("./example.txt").toString().trim();
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n")
  .map(Number);*/

let cnt = 1;
let start = 666;

while (cnt < input) {
  start++;
  if (String(start).includes("666")) {
    cnt++;
  }
}

console.log(start);
