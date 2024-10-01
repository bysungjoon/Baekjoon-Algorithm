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

const [T, ...numbers] = input;

let DP = [...Array(11)];

DP[1] = 1;
DP[2] = 2;
DP[3] = 4;

for (let i = 4; i < 11; i++) {
  DP[i] = DP[i - 1] + DP[i - 2] + DP[i - 3];
}

numbers.forEach((value) => {
  console.log(DP[value]);
});
