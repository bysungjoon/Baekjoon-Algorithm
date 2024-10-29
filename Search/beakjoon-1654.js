var fs = require("fs");
var input = fs.readFileSync("./example.txt").toString().trim().split("\n");
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.split(" ").map(Number));*/

const [K, N] = input.shift().split(" ").map(Number);
const lanlines = input.map(Number).sort((a, b) => a - b);
let max = Math.max(...lanlines);
let min = 1;

while (min <= max) {
  let mid = parseInt((max + min) / 2);
  //let cnt = input.reduce((acc, cur) => acc + parseInt(cur / mid), 0);

  let cnt = 0;
  for (let i = 0; i < K; i++) {
    cnt += parseInt(input[i] / mid);
  }

  if (N <= cnt) {
    min = mid + 1;
  } else {
    max = mid - 1;
  }
  console.log(mid);
}

console.log(max);
