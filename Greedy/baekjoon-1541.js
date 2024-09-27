let input = require("fs").readFileSync("./example.txt").toString().trim();
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");*/

const numbers = input.split("-").map((value) =>
  value
    .split("+")
    .map(Number)
    .reduce((acc, cur) => acc + cur)
);

let answer = numbers.reduce((acc, cur) => acc - cur);
console.log(answer);
