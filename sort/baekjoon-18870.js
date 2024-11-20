var fs = require("fs");
var input = fs.readFileSync("./example.txt").toString().trim().split("\n");
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n")
  .map(Number);*/

let arr = input[1].split(" ").map(Number);
let setArr = [...new Set(arr)].sort((a, b) => a - b);
let answer = [];
let object = {};

setArr.forEach((v, idx) => (object[v] = idx));

arr.forEach((value) => {
  answer.push(object[value]);
});

console.log(answer.join(" "));
