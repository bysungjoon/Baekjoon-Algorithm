var fs = require("fs");
var input = fs.readFileSync("./example.txt").toString().trim().split("\n");
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n")
  .map(Number);*/

const [N, M] = input[0].split(" ").map(Number);
const S = input.slice(1, N + 1);
const checkString = input.slice(N + 1);

let object = {};
let answer = 0;

S.forEach((value) => {
  object[value] = true;
});

checkString.forEach((value) => {
  /*constructor처럼 js의 Object에 기본적으로 포함된 메소드의 이름이 
주어지게 되면 의도하지 않은 결과가 나올 수 있으므로 "==" 추가*/
  if (object[value] == true) {
    answer += 1;
  }
});

console.log(answer);
