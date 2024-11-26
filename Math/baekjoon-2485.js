var fs = require("fs");
var input = fs
  .readFileSync("./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");*/

const [N, ...trees] = input;

let dist = [];
for (let i = 0; i < trees.length - 1; i++) {
  dist.push(trees[i + 1] - trees[i]);
}
dist.sort((a, b) => b - a);
let distGcd = dist[0];
for (let j = 0; j < dist.length; j++) {
  distGcd = GCD(distGcd, dist[j]);
}

console.log(dist, distGcd);
let answer = 0;
for (let k = 0; k < dist.length; k++) {
  if (dist[k] != distGcd) {
    answer += dist[k] / distGcd - 1;
  }
}

console.log(answer);

function GCD(a, b) {
  while (b != 0) {
    let c = a % b;
    a = b;
    b = c;
  }
  return a;
}
