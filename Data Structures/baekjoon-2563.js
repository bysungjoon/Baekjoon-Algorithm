var fs = require("fs");
var input = fs.readFileSync("./example.txt").toString().trim().split("\n");
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.split(" ").map(Number));*/

const cnt = input.shift();
let whitePaper = Array.from(Array(100), () => Array(100).fill(0));
let answer = 0;

for (let i = 0; i < cnt; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  for (let j = x; j < x + 10; j++) {
    for (let k = y; k < y + 10; k++) {
      if (whitePaper[j][k] != 1) {
        whitePaper[j][k] = 1;
        answer++;
      }
    }
  }
}

console.log(answer);
