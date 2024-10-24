var fs = require("fs");
var input = fs.readFileSync("./example.txt").toString().trim();
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(" ")
  .map(Number);*/

if (input.includes("c=")) {
  input = input.replace(/c=/g, "1");
}
if (input.includes("c-")) {
  input = input.replace(/c-/g, "1");
}
if (input.includes("dz=")) {
  input = input.replace(/dz=/g, "1");
}
if (input.includes("d-")) {
  input = input.replace(/d-/g, "1");
}
if (input.includes("lj")) {
  input = input.replace(/lj/g, "1");
}
if (input.includes("nj")) {
  input = input.replace(/nj/g, "1");
}
if (input.includes("s=")) {
  input = input.replace(/s=/g, "1");
}
if (input.includes("z=")) {
  input = input.replace(/z=/g, "1");
}

console.log(input.split("").length);
