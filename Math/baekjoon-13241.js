var fs = require("fs");
var input = fs.readFileSync("./example.txt").toString().trim();
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");*/

let AB = input.split(" ").map(Number);
AB.sort((a, b) => b - a);

let a = AB[0];
let b = AB[1];

while (b != 0) {
  let c = a % b;
  a = b;
  b = c;
}

let answer = (AB[0] * AB[1]) / a;
console.log(answer);
