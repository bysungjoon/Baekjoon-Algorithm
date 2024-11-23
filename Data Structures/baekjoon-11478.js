var fs = require("fs");
var input = fs.readFileSync("./example.txt").toString().trim();
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");*/

let map = new Map();

for (let i = 0; i < input.length; i++) {
  for (let j = 1; j <= input.length; j++) {
    if (input.slice(i, j)) {
      map.set(input.slice(i, j), true);
    }
  }
}

console.log(map.size);
