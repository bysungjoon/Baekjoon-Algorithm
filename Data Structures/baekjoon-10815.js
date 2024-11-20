var fs = require("fs");
var input = fs.readFileSync("./example.txt").toString().trim().split("\n");
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n")
  .map(Number);*/

const cards = input[1].split(" ").map(Number);
const checkCards = input[3].split(" ").map(Number);
let answer = [];
let object = {};

cards.forEach((v, idx) => {
  object[v] = 1;
});

checkCards.forEach((value) => {
  if (object[value] == 1) {
    answer.push(1);
  } else {
    answer.push(0);
  }
});

console.log(answer.join(" "));
