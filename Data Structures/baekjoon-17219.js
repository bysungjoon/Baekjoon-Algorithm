var fs = require("fs");
var input = fs.readFileSync("example.txt").toString().trim().split("\n");
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n")
  .map(Number);*/

const [N, M] = input.shift().split(" ").map(Number);

const site_PW = input.slice(0, N);
const findSitePW = input.slice(N);
let map = new Map();
let answer = [];

site_PW.forEach((value) => {
  const [site, pw] = value.split(" ");
  map.set(site, pw);
});

findSitePW.forEach((value) => {
  answer.push(map.get(value));
});

console.log(answer.join("\n"));
