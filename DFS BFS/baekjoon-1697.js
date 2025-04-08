var fs = require("fs");
var input = fs.readFileSync("example.txt").toString().trim();
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n")
  .map(Number);*/

let [N, K] = input.split(" ").map(Number);

const MAX = 100001;
const visited = Array(MAX).fill(false);
const queue = [];

visited[N] = true;
queue.push([N, 0]);

while (true) {
  const [current, time] = queue.shift();

  if (current == K) {
    console.log(time);
    break;
  }

  for (const next of [current - 1, current + 1, current * 2]) {
    if (next >= 0 && next < MAX && !visited[next]) {
      visited[next] = true;
      queue.push([next, time + 1]);
    }
  }
}
