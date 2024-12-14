var fs = require("fs");
var input = fs.readFileSync("example.txt").toString().trim().split("\n");
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");*/

const T = Number(input.shift());

for (let i = 0; i < T; i++) {
  const setX = [1, -1, 0, 0];
  const setY = [0, 0, 1, -1];
  const dfs = (x, y) => {
    if (ground[x][y] == 1 && checked[x][y] == false) {
      checked[x][y] = true;
      for (let i = 0; i < 4; i++) {
        const [newX, newY] = [x + setX[i], y + setY[i]];
        if (newX >= 0 && newX < M && newY >= 0 && newY < N) {
          dfs(newX, newY);
        }
      }
    }
  };

  const [M, N, K] = input.shift().split(" ").map(Number);
  let testArr = input.splice(0, K);
  let ground = Array.from(Array(M), () => Array(N).fill(0));
  let checked = Array.from(Array(M), () => Array(N).fill(false));
  let answer = 0;
  for (let j = 0; j < K; j++) {
    let [x, y] = testArr[j].split(" ").map(Number);
    ground[x][y] = 1;
  }

  for (let k = 0; k < M; k++) {
    for (let l = 0; l < N; l++) {
      if (ground[k][l] == 1 && checked[k][l] == false) {
        dfs(k, l);
        answer++;
      }
    }
  }
  console.log(answer);
}
