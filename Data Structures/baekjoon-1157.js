var fs = require("fs");
var input = fs.readFileSync("./example.txt").toString().trim();
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim();*/

let Alpabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let arr = new Array(26).fill(0);
let upperCase = input.toUpperCase().split("");

for (let i = 0; i < upperCase.length; i++) {
  let idx = Alpabet.indexOf(upperCase[i]);
  arr[idx]++;
}
let maxCnt = 0;
arr.forEach((v) => {
  if (v == Math.max(...arr)) {
    maxCnt++;
  }
});
if (maxCnt == 1) {
  let manyUseApb = arr.indexOf(Math.max(...arr));
  console.log(Alpabet[manyUseApb]);
} else {
  console.log("?");
}
