let input = require("fs")
  .readFileSync("./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n")
  .map(Number);*/

let [K, ...numbers] = input;
let arr = [];

for (let i = 0; i < K; i++) {
  if (numbers[i] != 0) {
    arr.push(numbers[i]);
  } else {
    arr.pop();
  }
}

console.log(
  arr.reduce((acc, cur) => {
    return acc + cur;
  }, 0)
);
