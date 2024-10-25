var fs = require("fs");
var input = fs.readFileSync("./example.txt").toString().trim().split("\n");
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(" ")
  .map(Number);*/

let sumCredit = 0; // 전공과목별 (학점x과목평점)의 합
let maxCredit = 0; // 학점의 총합

for (let i = 0; i < input.length; i++) {
  let subject = input[i].split(" ");
  if (subject[2] != "P") {
    maxCredit += Number(subject[1]);
  }
  if (subject[2] == "A+") {
    sumCredit += Number(subject[1]) * 4.5;
  } else if (subject[2] == "A0") {
    sumCredit += Number(subject[1]) * 4;
  } else if (subject[2] == "B+") {
    sumCredit += Number(subject[1]) * 3.5;
  } else if (subject[2] == "B0") {
    sumCredit += Number(subject[1]) * 3;
  } else if (subject[2] == "C+") {
    sumCredit += Number(subject[1]) * 2.5;
  } else if (subject[2] == "C0") {
    sumCredit += Number(subject[1]) * 2;
  } else if (subject[2] == "D+") {
    sumCredit += Number(subject[1]) * 1.5;
  } else if (subject[2] == "D0") {
    sumCredit += Number(subject[1]) * 1;
  } else if (subject[2] == "F") {
    sumCredit += Number(subject[1]) * 0;
  } else {
    continue;
  }
}
console.log(sumCredit / maxCredit);
