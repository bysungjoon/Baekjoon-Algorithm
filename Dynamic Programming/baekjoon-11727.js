var fs = require("fs");
var input = fs.readFileSync("example.txt").toString().trim();
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n")
  .map(Number);*/

let N = +input;
let DP = new Array(1001).fill(0);
DP[1] = 1;
DP[2] = 3;

for (let i = 3; i <= N; i++) {
  DP[i] = (DP[i - 1] + DP[i - 2] * 2) % 10007;
}

console.log(DP[N]);
