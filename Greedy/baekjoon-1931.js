let input = require("fs")
  .readFileSync("./example.txt")
  .toString()
  .trim()
  .split("\n");
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");*/

const [N, ...times] = input;
let endTime = 0;
let cnt = 0;

const sortTimes = times
  .map((num) => num.split(" ").map((num) => +num))
  .sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });

sortTimes.forEach((time) => {
  if (time[0] >= endTime) {
    cnt++;
    endTime = time[1];
  }
});

console.log(cnt);
