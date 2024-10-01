let input = require("fs")
  .readFileSync("./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n")
  .map(Number);*/

const [T, ...numbers] = input;
let zeroCnt = 0;
let oneCnt = 0;

numbers.forEach((value) => {
  zeroCnt = 1;
  oneCnt = 0;

  for (let i = 1; i <= value; i++) {
    let tmpCnt = zeroCnt;

    zeroCnt = oneCnt;
    oneCnt = tmpCnt + zeroCnt;
  }

  console.log(zeroCnt, oneCnt);
});
