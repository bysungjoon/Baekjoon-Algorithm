var fs = require("fs");
var input = fs.readFileSync("example.txt").toString().trim().split("\n");
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");*/

const [N, M] = input.shift().split(" ");
let arr = input
  .filter((value) => {
    if (value.length >= parseInt(M)) return value;
  })
  .sort()
  .sort((a, b) => b.length - a.length);

let map = new Map();
arr.forEach((value) => {
  if (map.has(value)) {
    map.set(value, map.get(value) + 1);
  } else {
    map.set(value, 1);
  }
});

let anwerArr = [...map].sort((a, b) => b[1] - a[1]);
let answer = anwerArr.map(([word]) => word);

console.log(answer.join("\n"));
