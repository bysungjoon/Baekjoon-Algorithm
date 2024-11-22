var fs = require("fs");
var input = fs.readFileSync("./example.txt").toString().trim().split("\n");
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n")
  .map(Number);*/

const [N, M] = input[0].split(" ").map(Number);
let map = new Map();
let answer = [];

for (let i = 1; i <= N; i++) {
  map.set(input[i], i);
}

for (let j = 1; j <= M; j++) {
  if (Number.isNaN(+input[N + j])) {
    answer.push(map.get(input[N + j]));
  } else {
    answer.push(input[input[N + j]]);
  }
}

console.log(answer.join("\n"));
