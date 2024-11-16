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

let [N, ...arr] = input;
let sortArr = arr.sort((a, b) => a - b);

console.log(sortArr.join("\n"));
