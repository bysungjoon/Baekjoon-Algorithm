let input = require("fs")
  .readFileSync("./example.txt")
  .toString()
  .trim()
  .split("\n");
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");*/

const [T, ...string] = input;

let left = 0;
let right = 0;

string.forEach((value) => {
  left = 0;
  right = 0;
  for (let i = 0; i < value.length; i++) {
    if (value[i] == "(") {
      left++;
    } else if (value[i] == ")") {
      right++;
      if (left < right) {
        break;
      }
    }
  }
  console.log(left == right ? "YES" : "NO");
});
