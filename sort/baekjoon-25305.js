var fs = require("fs");
var input = fs.readFileSync("./example.txt").toString().trim().split("\n");
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n")
  .map(Number);*/

const [N, k] = input[0].split(" ").map(Number);
let grade = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

console.log(grade[grade.length - k]);
