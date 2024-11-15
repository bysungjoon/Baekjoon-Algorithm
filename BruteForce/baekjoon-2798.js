var fs = require("fs");
var input = fs.readFileSync("./example.txt").toString().trim().split("\n");
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n")
  .map(Number);*/

let [N, M] = input[0].split(" ").map(Number);
let cards = input[1].split(" ").map(Number);

let sum = 0;
let maxSum = 0;

for (let i = 0; i < N - 2; i++) {
  for (let j = i + 1; j < N - 1; j++)
    for (let k = j + 1; k < N; k++) {
      sum = cards[i] + cards[j] + cards[k];
      if (sum <= M && sum > maxSum) {
        maxSum = sum;
      }
    }
}

console.log(maxSum);
