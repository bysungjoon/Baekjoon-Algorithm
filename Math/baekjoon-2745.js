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

// N진법 -> 10진법으로 변환
console.log(parseInt(input[0], input[1]));

// 10진법 -> N진법으로 변환
//console.log(input[0].toString(input[1]).toUpperCase());
