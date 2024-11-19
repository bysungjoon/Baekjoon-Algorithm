var fs = require("fs");
var input = fs.readFileSync("./example.txt").toString().trim().split("\n");
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n")
  .map(Number);*/

const [N, ...member] = input;
let arr = [];

member.forEach((value) => {
  arr.push(value.split(" "));
});

arr.sort((a, b) => {
  return a[0] - b[0];
});

arr.forEach((value) => {
  console.log(value.join(" "));
});
