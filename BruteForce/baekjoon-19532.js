var fs = require("fs");
var input = fs.readFileSync("./example.txt").toString().trim().split(" ");
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(" ")
  .map(Number);*/

const [a, b, c, d, e, f] = input;
let x = 0;
let y = 0;

for (let i = -999; i <= 999; i++) {
  for (let j = -999; j <= 999; j++) {
    if (a * i + b * j == c && d * i + e * j == f) {
      x = i;
      y = j;
    }
  }
}

console.log(x, y);
