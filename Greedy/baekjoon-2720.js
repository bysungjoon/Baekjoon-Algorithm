let input = require("fs")
  .readFileSync("./example.txt")
  .toString()
  .trim()
  .split("\n");
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");*/

const [T, ...change] = input;
let Quarter, Dime, Nickel, Penny;

change.map(Number).forEach((value) => {
  Quarter = 0;
  Dime = 0;
  Nickel = 0;
  Penny = 0;

  while (value > 0) {
    if (value >= 25) {
      value = value - 25;
      Quarter++;
    } else if (value >= 10) {
      value = value - 10;
      Dime++;
    } else if (value >= 5) {
      value = value - 5;
      Nickel++;
    } else if (value >= 1) {
      value = value - 1;
      Penny++;
    }
  }
  console.log(Quarter, Dime, Nickel, Penny);
});
