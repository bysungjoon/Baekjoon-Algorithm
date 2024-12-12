var fs = require("fs");
var input = fs.readFileSync("example.txt").toString().trim().split("\n");
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");*/

const N = Number(input.shift());

const map = input.map((row) => row.split("").map(Number));
const visited = Array.from(Array(N), () => Array(N).fill(false));
let answer = [];

let homeNum = 0;
let townNum = 0;
const setX = [0, 0, 1, -1];
const setY = [1, -1, 0, 0];

const dfs = (x, y) => {
  if (map[x][y] == 1 && visited[x][y] == false) {
    visited[x][y] = true;
    homeNum++;

    for (let k = 0; k < 4; k++) {
      const [newX, newY] = [x + setX[k], y + setY[k]];
      if (newX >= 0 && newX < N && newY >= 0 && newY < N) {
        dfs(newX, newY);
      }
    }
  }
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] == 1 && visited[i][j] == false) {
      dfs(i, j);
      townNum++;
      answer.push(homeNum);
      homeNum = 0;
    }
  }
}

console.log(townNum);
console.log(answer.sort((a, b) => a - b).join("\n"));
