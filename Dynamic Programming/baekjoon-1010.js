var fs = require("fs");
var input = fs.readFileSync("example.txt").toString().trim().split("\n");
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");*/

const T = input.shift();
let dp = Array.from(Array(30), () => Array(30).fill(0));

for (let i = 1; i < 30; i++) {
  for (let j = 1; j < 30; j++) {
    if (i == 1) {
      dp[i][j] = j;
    } else if (i == j) {
      dp[i][j] = 1;
    } else if (i < j) {
      dp[i][j] = dp[i - 1][j - 1] + dp[i][j - 1];
    }
  }
}

for (let k = 0; k < T; k++) {
  const [N, M] = input[k].split(" ").map(Number);
  console.log(dp[N][M]);
}
