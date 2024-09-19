let input = require("fs")
  .readFileSync("./example.txt")
  .toString()
  .trim()
  .split("\n");
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");*/

let arr = input[1].split(" ").map(Number);
let time = 0;
let totalTime = 0;

arr.sort((a, b) => a - b);
arr.forEach((value) => {
  time = time + value;
  totalTime = totalTime + time;
});

console.log(totalTime);
