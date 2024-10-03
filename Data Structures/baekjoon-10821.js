let input = require("fs").readFileSync("./example.txt").toString().trim();
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim();*/

const S = input.split(",");
console.log(S.length);
