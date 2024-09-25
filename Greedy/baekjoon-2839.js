let input = require("fs").readFileSync("example.txt");
//let input = require('fs').readFileSync('/dev/stdin');

let cnt = 0;

while (true) {
  if (input % 5 === 0) {
    console.log(cnt + input / 5);
    break;
  } else {
    input -= 3;
    cnt++;
  }
  if (input < 0) {
    console.log(-1);
    break;
  }
}
