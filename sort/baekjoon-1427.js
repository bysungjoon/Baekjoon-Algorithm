var fs = require("fs");
var input = fs.readFileSync("./example.txt").toString().trim().split("");
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n")
  .map(Number);*/

let sortArr = input.sort((a, b) => b - a);

console.log(sortArr.join(""));
