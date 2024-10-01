let input = require("fs").readFileSync("./example.txt").toString().trim();
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");*/

const DP = [];

DP[1] = 1;
DP[2] = 2;

for (let i = 3; i <= input; i++) {
  DP[i] = (DP[i - 1] + DP[i - 2]) % 10007;
}

console.log(DP[input]);
