var fs = require("fs");
var input = fs.readFileSync("./example.txt").toString().trim();
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");*/

let answer = 0;

for (let i = 1; i <= Math.sqrt(Number(input)); i++) {
  answer++;
}

console.log(answer);
