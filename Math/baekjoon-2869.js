var fs = require("fs");
var input = fs
  .readFileSync("./example.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n")
  .map(Number);*/

const [A, B, V] = input;

let day = (V - B) / (A - B);

console.log(Math.ceil(day));

// 단순 반복문 사용 시 시간초과
/*let meter = 0;
let day = 0;

while (meter <= V) {
  day++;
  meter += A;
  if (meter >= V) {
    break;
  }
  meter -= B;
}

console.log(day);*/
