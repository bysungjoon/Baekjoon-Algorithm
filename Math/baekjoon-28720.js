var fs = require("fs");
var input = fs.readFileSync("example.txt").toString().trim().split("\n");
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");*/

const numInput = input.map(Number);
let cnt = 0;
let answer;

for (let i = 0; i < 3; i++) {
  if (!numInput[i]) {
    cnt++;
  } else {
    cnt = numInput[i];
  }
}
cnt++;

if (cnt % 3 == 0 && cnt % 5 == 0) {
  answer = "FizzBuzz";
} else if (cnt % 3 == 0 && cnt % 5 != 0) {
  answer = "Fizz";
} else if (cnt % 3 != 0 && cnt % 5 == 0) {
  answer = "Buzz";
} else {
  answer = cnt;
}

console.log(answer);
