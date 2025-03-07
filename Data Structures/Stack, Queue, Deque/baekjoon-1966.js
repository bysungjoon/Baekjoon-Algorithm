var fs = require("fs");
var input = fs.readFileSync("example.txt").toString().trim().split("\n");
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n")
  .map(Number);*/

const T = input.shift();

for (let i = 0; i < T * 2; i += 2) {
  let [N, M] = input[i].split(" ").map(Number);
  let arr = input[i + 1].split(" ").map(Number);
  let answer = 1;

  while (true) {
    let maxNum = Math.max(...arr);
    let currentNum = arr.shift();

    if (currentNum >= maxNum && M == 0) {
      console.log(answer);
      break;
    } else if (currentNum <= maxNum && M == 0) {
      arr.push(currentNum);
      M = arr.length - 1;
    } else if (currentNum >= maxNum) {
      M = M - 1;
      answer++;
    } else if (currentNum <= maxNum) {
      arr.push(currentNum);
      M = M - 1;
    }
  }
}
