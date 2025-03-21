var fs = require("fs");
var input = fs.readFileSync("example.txt").toString().trim().split("\n");
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n")
  .map(Number);*/

// N과 M
const [N, M] = input[0].split(" ").map(Number);
// N개의 수
const arr = input[1].split(" ").map(Number);

// arr 배열 요소의 합 배열 생성
let sumArr = new Array(N + 1).fill(0);
for (let i = 1; i <= N; i++) {
  sumArr[i] = sumArr[i - 1] + arr[i - 1];
}

let answer = [];
for (let a = 0; a < M; a++) {
  let [i, j] = input[a + 2].split(" ").map(Number);
  answer.push(sumArr[j] - sumArr[i - 1]);
}

console.log(answer.join("\n"));
