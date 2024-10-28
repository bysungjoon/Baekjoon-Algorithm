let input = require("fs")
  .readFileSync("./example.txt")
  .toString()
  .trim()
  .split("\n");
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n")
  .map(Number);*/

const arr = input[1].split(" ").map(Number);
const numbers = input[3].split(" ").map(Number);

arr.sort((a, b) => a - b);

numbers.forEach((value) => {
  let start = 0;
  let end = arr.length - 1;
  let isNumberInArr = false;

  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (value < arr[mid]) {
      end = mid - 1;
    } else if (value > arr[mid]) {
      start = mid + 1;
    } else {
      isNumberInArr = true;
      break;
    }
  }
  console.log(isNumberInArr ? 1 : 0);
});
