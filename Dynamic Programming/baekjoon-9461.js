var fs = require("fs");
var input = fs.readFileSync("example.txt").toString().trim().split("\n");
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n")
  .map(Number);*/

// 테스트 케이스의 수
const T = input.shift();

for (let i = 0; i < T; i++) {
  let N = +input.shift();
  // 5번째까지는 고정
  let answer = [1, 1, 1, 2, 2];

  // 5번째 이후의 길이만큼 반복
  for (let j = 0; j < N - 5; j++) {
    answer[j + 5] = answer[j] + answer[j + 4];
  }
  // 정답
  console.log(answer[N - 1]);
}
