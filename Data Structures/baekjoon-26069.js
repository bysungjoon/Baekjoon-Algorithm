var fs = require("fs");
var input = fs.readFileSync("example.txt").toString().trim().split("\n");
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");*/

const N = input.shift();
let arr = new Map();
let answer = 1;

input.forEach((value) => {
  const [A, B] = value.split(" ");

  if (arr.has(A) && !arr.has(B)) {
    arr.set(B);
    answer++;
  } else if (!arr.has(A) && arr.has(B)) {
    arr.set(A);
    answer++;
  } else if (!arr.has(A) && !arr.has(B)) {
    if (A === "ChongChong" || B === "ChongChong") {
      arr.set(A);
      arr.set(B);
      answer++;
    }
  }
});

console.log(answer);
