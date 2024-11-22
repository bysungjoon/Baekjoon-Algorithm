var fs = require("fs");
var input = fs.readFileSync("./example.txt").toString().trim().split("\n");
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");*/

const [lengthA, lengthB] = input[0].split(" ").map(Number);
let A = input[1].split(" ").map(Number);
let B = input[2].split(" ").map(Number);

let AnB = [];
let BnA = [];

let mapA = new Map();
let mapB = new Map();

A.forEach((value) => {
  mapA[value] = true;
});

B.forEach((value) => {
  mapB[value] = true;
});

A.forEach((value) => {
  if (mapB[value] != true) {
    AnB.push(value);
  }
});

B.forEach((value) => {
  if (mapA[value] != true) {
    BnA.push(value);
  }
});

console.log(AnB.length + BnA.length);
