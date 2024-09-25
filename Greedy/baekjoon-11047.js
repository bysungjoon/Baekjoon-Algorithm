let input = require("fs")
  .readFileSync("./example.txt")
  .toString()
  .trim()
  .split("\n");
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");*/

let [N, K] = input[0].split(" ");
let [NK, ...coins] = input;
let cnt = 0;

coins = coins.map((item) => parseInt(item)).sort((a, b) => b - a);

coins.forEach((item) => {
  while (true) {
    if (K - item < 0) {
      break;
    }
    K = K - item;
    cnt++;
  }
});

console.log(cnt);
