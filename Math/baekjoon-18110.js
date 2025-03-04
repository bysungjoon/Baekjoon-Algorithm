var fs = require("fs");
var input = fs
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n")
  .map(Number);*/

const N = input.shift();
let arr = input.sort((a, b) => a - b);
let avg = 0;

if (N == 0) {
  console.log(0);
} else {
  let outNum = Math.round(N * 0.15);
  let newArr = arr.slice(outNum, arr.length - outNum);
  avg = Math.round(newArr.reduce((acc, cur) => acc + cur, 0) / newArr.length);
  console.log(avg);
}
