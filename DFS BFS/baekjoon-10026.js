var fs = require("fs");
var input = fs.readFileSync("example.txt").toString().trim().split("\n");
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");*/

const N = +input.shift();
let colorMap = input.map((v) => v.split(""));
let visited = Array.from(Array(N), () => Array(N).fill(false));
let answer = 0;
let answerRG = 0;

const setX = [0, 0, 1, -1];
const setY = [1, -1, 0, 0];
const dfs = (x, y, c) => {
  if (visited[x][y] == false && c == colorMap[x][y]) {
    visited[x][y] = true;

    for (let i = 0; i < 4; i++) {
      const [newX, newY] = [x + setX[i], y + setY[i]];
      if (newX >= 0 && newX < N && newY >= 0 && newY < N) {
        dfs(newX, newY, c);
      }
    }
  }
};

// 색약X
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (visited[i][j] == false) {
      dfs(i, j, colorMap[i][j]);
      answer++;
    }
  }
}

// 색약O
visited = Array.from(Array(N), () => Array(N).fill(false));
colorMap = colorMap.map((v) => v.map((l) => (l == "R" || l == "G" ? "RG" : l)));
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (visited[i][j] == false) {
      dfs(i, j, colorMap[i][j]);
      answerRG++;
    }
  }
}

console.log(answer, answerRG);
