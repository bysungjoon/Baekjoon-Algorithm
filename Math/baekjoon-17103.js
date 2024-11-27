var fs = require("fs");
var input = fs
  .readFileSync("./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");*/

const [T, ...numbers] = input;
let maxNum = Math.max(...numbers);
let arr = Array(maxNum + 1).fill(true);
arr[0] = false;
arr[1] = false;

for (let i = 2; i <= maxNum; i++) {
  if (!getGCD(i)) {
    arr[i] = false;
  }
}

numbers.forEach((value) => {
  let answer = 0;
  for (let i = 2; i <= value / 2; i++) {
    if (arr[i] && arr[value - i]) {
      answer++;
    }
  }
  console.log(answer);
});

function getGCD(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
