var fs = require("fs");
var input = fs.readFileSync("example.txt").toString().trim().split("\n");
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n")
  .map(Number);*/

const [n, m] = input.shift().split(" ").map(Number);
const map = input.map((line) => line.split(" ").map(Number));

let answer = Array.from(Array(n), () => Array(m).fill(-1));

let startX = -1;
let startY = -1;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (map[i][j] == 2) {
      startX = i;
      startY = j;
      break;
    }
  }
  if (startX != -1) break;
}

let dx = [0, 0, -1, 1];
let dy = [-1, 1, 0, 0];
let queue = [[startX, startY]];

answer[startX][startY] = 0;
while (queue.length) {
  const [x, y] = queue.shift();

  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];

    if (
      nx >= 0 &&
      nx < n &&
      ny >= 0 &&
      ny < m &&
      answer[nx][ny] == -1 &&
      map[nx][ny] == 1
    ) {
      answer[nx][ny] = answer[x][y] + 1;
      queue.push([nx, ny]);
    }
  }
}

// -1을 0으로 변환
map.forEach((row, i) => {
  row.forEach((cell, j) => {
    if (cell === 0) answer[i][j] = 0;
  });
});

// 출력
answer.forEach((value) => {
  console.log(value.join(" "));
});
