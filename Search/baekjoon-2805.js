var fs = require("fs");
var input = fs.readFileSync("example.txt").toString().trim().split("\n");
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n")
  .map(Number);*/

const [N, M] = input[0].split(" ").map(Number);
const trees = input[1].split(" ").map(Number);
trees.sort((a, b) => a - b);

let start = 0;
let end = trees[trees.length - 1];
let answer = 0;

// 이분탐색
while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let sum = 0;

  trees.forEach((value) => {
    if (value > mid) sum += value - mid;
  });

  if (sum >= M) {
    start = mid + 1;
    answer = mid;
  } else {
    end = mid - 1;
  }
}

console.log(answer);
