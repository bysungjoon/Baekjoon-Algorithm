var fs = require("fs");
const { join } = require("path");
var input = fs.readFileSync("./example.txt").toString().trim().split("\n");
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n")
  .map(Number);*/

for (let i = 0; i < input.length - 1; i++) {
  let answer = [];
  for (let j = 1; j < input[i]; j++) {
    if (input[i] % j == 0) {
      answer.push(j);
    }
  }
  let totalSum = answer.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  if (input[i] == totalSum) {
    console.log(`${input[i]} = ${answer.join(" + ")}`);
  } else {
    console.log(`${input[i]} is NOT perfect.`);
  }
}
