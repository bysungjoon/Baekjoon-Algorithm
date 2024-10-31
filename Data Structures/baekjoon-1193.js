var fs = require("fs");
var input = fs.readFileSync("./example.txt").toString().trim();
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n")
  .map(Number);*/

let line = 0;
let topNum = 0;
let BottomNum = 0;

while (input > 0) {
  line++;
  input -= line;
}

let lineNum = line + input;

if (line % 2 == 1) {
  topNum = line;
  BottomNum = 1;
  for (let i = 1; i < lineNum; i++) {
    topNum--;
    BottomNum++;
  }
} else {
  topNum = 1;
  BottomNum = line;
  for (let i = 1; i < lineNum; i++) {
    topNum++;
    BottomNum--;
  }
}

console.log(topNum + "/" + BottomNum);
