var fs = require("fs");
var input = fs.readFileSync("example.txt").toString().trim().split("\n");
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");*/

const computerNum = input.shift();
const linkedCom = input.shift();
let edges = input.map((v) => v.split(" ").map(Number));
let graph = [...Array(Number(computerNum) + 1)].map(() => []);

edges.forEach(([from, to]) => {
  graph[from].push(to);
  graph[to].push(from);
});

const dfs = (start) => {
  const stack = [start];
  const visited = [...Array(Number(computerNum) + 1)].fill(false);
  const answer = [];
  while (stack.length) {
    const node = stack.pop();
    if (!visited[node]) {
      visited[node] = true;
      answer.push(node);
      stack.push(...graph[node]);
    }
  }
  return answer.length - 1;
};

graph.forEach((v) => v.sort((a, b) => b - a));
console.log(dfs(1));
