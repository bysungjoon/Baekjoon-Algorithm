var fs = require("fs");
var input = fs
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");*/

const N = input.shift();
input.sort((a, b) => a - b);

// 산술평균
let sumAvg = Math.round(input.reduce((acc, cur) => acc + cur) / N);
console.log(sumAvg.toString());

// 중앙값
let midValue = input[Math.floor(N / 2)];
console.log(midValue);

// 최빈값
let map = new Map();
input.forEach((value) => {
  map.set(value, (map.get(value) || 0) + 1);
});

let maxValue = 0;
let cntList = [];
map.forEach((value, key) => {
  if (value > maxValue) {
    maxValue = value;
    cntList = [key];
  } else if (value == maxValue) {
    cntList.push(key);
  }
});

let maxCntValue = cntList.length == 1 ? cntList[0] : cntList[1];
console.log(maxCntValue);

// 범위
let range = input[N - 1] - input[0];
console.log(range);
