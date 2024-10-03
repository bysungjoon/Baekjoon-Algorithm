let input = require("fs")
  .readFileSync("./example.txt")
  .toString()
  .trim()
  .split("\n");
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n")*/

const [T, ...numbers] = input;

numbers.forEach((value) => {
  let [A, B] = value.split(",").map(Number);
  console.log(A + B);
});
