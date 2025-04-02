var fs = require("fs");
var input = fs.readFileSync("example.txt").toString().trim().split("\n");
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n")
  .map(Number);*/

const N = input.shift();
const paper = input.map((row) => row.split(" ").map(Number));

let white = 0;
let blue = 0;

const quadrant = (r, c, n) => {
  if (checkColor(r, c, n)) {
    if (paper[r][c] == 1) blue++;
    else white++;
    return;
  }

  let half = n / 2;
  quadrant(r, c, half); // 1분면
  quadrant(r, c + half, half); // 2분면
  quadrant(r + half, c, half); // 3분면
  quadrant(r + half, c + half, half); // 4분면
};

const checkColor = (r, c, n) => {
  const base = paper[r][c];
  for (let i = r; i < r + n; i++) {
    for (let j = c; j < c + n; j++) {
      if (base != paper[i][j]) return false;
    }
  }
  return true;
};

quadrant(0, 0, N);
console.log(`${white}\n${blue}`);
