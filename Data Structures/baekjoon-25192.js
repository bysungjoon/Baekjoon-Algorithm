var fs = require("fs");
var input = fs.readFileSync("example.txt").toString().trim().split("\n");
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");*/

const N = input.shift();
let arr = new Map();
let answer = 0;

input.forEach((value) => {
  if (value == "ENTER") {
    arr.clear();
  } else if (!arr.has(value)) {
    arr.set(value);
    answer++;
  }
});

console.log(answer);
