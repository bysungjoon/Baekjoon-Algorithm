var fs = require("fs");
var input = fs.readFileSync("./example.txt").toString().trim().split("\n");
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n")
  .map(Number);*/

const [N, ...arr] = input;

arr.sort((a, b) => {
  return a.length - b.length;
});

arr.sort((a, b) => {
  if (a.length == b.length) {
    return a < b ? -1 : 1;
  }
});

let answer = [...new Set(arr)];

console.log(answer.join("\n"));
