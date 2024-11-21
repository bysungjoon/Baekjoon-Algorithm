var fs = require("fs");
var input = fs.readFileSync("./example.txt").toString().trim().split("\n");
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(" ")
  .map(Number);*/

const [n, ...inoutList] = input;
let object = {};
let answer = [];

inoutList.forEach((value) => {
  let [name, inOut] = value.split(" ");
  object[name] = inOut;
});

for (key in object) {
  if (object[key] == "enter") {
    answer.push(key);
  }
}

answer.sort();
answer.reverse();

console.log(answer.join("\n"));
