var fs = require("fs");
var input = fs.readFileSync("./example.txt").toString().trim().split("\n");
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");*/

const [A, B] = input[0].split(" ").map(Number);
const [C, D] = input[1].split(" ").map(Number);

let nume = A * D + C * B;
let deno = B * D;
let N = GCD(nume, deno);

function GCD(a, b) {
  while (a != 0) {
    let c = b % a;
    b = a;
    a = c;
  }
  return b;
}

console.log(nume / N, deno / N);
