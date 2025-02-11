var fs = require("fs");
var input = fs.readFileSync("example.txt").toString().trim().split("\n");
/*let input = require('fs').readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");*/

const [N, K] = input.shift().split(" ").map(Number);
let arr = input[0].split(" ").map(Number);
let answer;
let cnt = 0;

function merge_sort(A, p, r) {
  if (p < r) {
    let q = Math.floor((p + r) / 2);
    merge_sort(A, p, q);
    merge_sort(A, q + 1, r);
    merge(A, p, q, r);
  }
}

function merge(A, p, q, r) {
  let tmp = [];
  let i = p;
  let j = q + 1;
  let t = 0;
  while (i <= q && j <= r) {
    if (A[i] <= A[j]) {
      tmp[t++] = A[i++];
    } else {
      tmp[t++] = A[j++];
    }
  }
  while (i <= q) {
    tmp[t++] = A[i++];
  }
  while (j <= r) {
    tmp[t++] = A[j++];
  }
  i = p;
  t = 0;
  while (i <= r) {
    A[i++] = tmp[t++];
    cnt++;
    if (cnt == K) {
      answer = tmp[--t];
    }
  }
}

merge_sort(arr, 0, arr.length - 1);

if (answer == undefined) console.log(-1);
else console.log(answer);
