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
  .split("\n")
  .map(Number);*/

let sortArr = input.sort((a, b) => a - b);
let sortArrSum = sortArr.reduce((acc, cur) => acc + cur);

console.log(sortArrSum / sortArr.length);
console.log(sortArr[(sortArr.length - 1) / 2]);
