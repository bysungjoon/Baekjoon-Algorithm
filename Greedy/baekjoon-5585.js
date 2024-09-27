let input = require("fs").readFileSync("./example.txt").toString().trim();
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");*/

let change = 1000 - input;
let cnt = 0;

while (change > 0) {
  if (change >= 500) {
    change = change - 500;
    cnt++;
  } else if (change >= 100) {
    change = change - 100;
    cnt++;
  } else if (change >= 50) {
    change = change - 50;
    cnt++;
  } else if (change >= 10) {
    change = change - 10;
    cnt++;
  } else if (change >= 5) {
    change = change - 5;
    cnt++;
  } else if (change >= 1) {
    change = change - 1;
    cnt++;
  }
}
console.log(cnt);
