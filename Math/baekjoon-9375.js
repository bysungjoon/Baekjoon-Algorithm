var fs = require("fs");
var input = fs.readFileSync("example.txt").toString().trim().split("\n");
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n")
  .map(Number);*/

const T = input.shift();

// 테스트 케이스만큼 반복
for (let i = 0; i < T; i++) {
  let clothes = [];
  let n = +input.shift();

  // 의상의 수만 배열 분리
  for (let j = 0; j < n; j++) {
    clothes.push(input.shift());
  }

  // 의상의 종류별로 객체 분리
  let map = new Map();
  clothes.forEach((value) => {
    const [item, category] = value.split(" ");
    map.set(category, (map.get(category) || 0) + 1);
  });

  let answer = 1;
  map.forEach((value, key) => {
    // answer *= 의상의 종류 + 1(의상을 안입은 경우)
    answer *= value + 1;
  });

  // 모든 경우의 수 - 1(알몸 상태)
  console.log(answer - 1);
}
