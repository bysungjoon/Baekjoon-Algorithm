var fs = require("fs");
var input = fs.readFileSync("example.txt").toString().trim().split("\n");
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");*/

const [N, M] = input.shift().split(" ").map(Number);
let edges = input.map((v) => v.split(" ").map(Number));
let graph = [...Array(N + 1)].map(() => []);
let visited = [...Array(N + 1)].fill(false);

edges.forEach(([from, to]) => {
  graph[from].push(to);
  graph[to].push(from);
});

const bfs = (start) => {
  visited[start] = true;
  for (let nextNode of graph[start]) {
    if (!visited[nextNode]) {
      bfs(nextNode);
    }
  }
};

let answer = 0;
for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    bfs(i);
    answer++;
  }
}

console.log(answer);
