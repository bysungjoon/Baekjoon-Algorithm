var fs = require("fs");
var input = fs.readFileSync("example.txt").toString().trim().split("\n");
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n")
  .map(Number);*/

const N = input.shift();
const arr = input.map((v) => v.split(" ").map(Number));
let answer = [];

for (let i = 0; i < N; i++) {
  const [x, y] = arr[i];
  let rank = 1;
  for (let j = 0; j < N; j++) {
    const [p, q] = arr[j];
    if (x < p && y < q) {
      rank++;
    }
  }
  answer.push(rank);
}
console.log(answer.join(" "));
