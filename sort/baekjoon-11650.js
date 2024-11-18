var fs = require("fs");
var input = fs.readFileSync("./example.txt").toString().trim().split("\n");
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n")
  .map(Number);*/

const [N, ...arr] = input;
let arrXY = [];

arr.forEach((value) => {
  arrXY.push(value.split(" ").map(Number));
});

arrXY.sort((a, b) => {
  if (a[0] == b[0]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
});

arrXY.forEach((value) => {
  console.log(value.join(" "));
});
