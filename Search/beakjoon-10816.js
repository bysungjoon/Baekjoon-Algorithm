let input = require("fs")
  .readFileSync("./example.txt")
  .toString()
  .trim()
  .split("\n");
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.split(" ").map(Number));*/

const haveCards = input[1].split(" ").map(Number);
const numbers = input[3].split(" ").map(Number);

let answer = [];
let map = new Map();

for (value of haveCards) {
  if (map.has(value)) map.set(value, map.get(value) + 1);
  else map.set(value, 1);
}

for (value of numbers) {
  if (map.has(value)) answer.push(map.get(value));
  else answer.push(0);
}

console.log(answer.join(" "));
