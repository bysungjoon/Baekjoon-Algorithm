var fs = require("fs");
var input = fs.readFileSync("./example.txt").toString().trim().split("\n");
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");*/

const [N, M] = input[0].split(" ").map(Number);
let notlistenArr = input.slice(1, N + 1);
let notseeArr = input.slice(N + 1);
let answer = [];

let map = new Map();
notlistenArr.forEach((value) => {
  map[value] = true;
});

notseeArr.forEach((value) => {
  if (map[value] == true) {
    answer.push(value);
  }
});

console.log(answer.length);
console.log(answer.sort().join("\n"));
