var fs = require("fs");
var input = fs.readFileSync("example.txt").toString().trim();
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n")
  .map(Number);*/

let n = +input;

const DP = new Array(n + 1).fill(0);
DP[0] = 0;
DP[1] = 1;
for (let i = 2; i <= n; i++) {
  let min = 4;
  for (let j = 1; j * j <= i; j++) {
    min = Math.min(min, DP[i - j * j] + 1);
  }
  DP[i] = min;
}
console.log(DP[n]);
