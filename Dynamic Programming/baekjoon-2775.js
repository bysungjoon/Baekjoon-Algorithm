let input = require("fs")
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

const T = input.shift();
const DP = Array.from(Array(15), () => Array(15).fill(0));

for (let i = 0; i < 15; i++) {
  DP[0][i] = i + 1;
  DP[i][0] = 1;
}

for (let k = 1; k < 15; k++) {
  for (let n = 1; n < 15; n++) {
    DP[k][n] = DP[k - 1][n] + DP[k][n - 1];
  }
}

for (let i = 0; i < T; i++) {
  let k = input.shift();
  let n = input.shift();
  console.log(DP[k][n - 1]);
}
