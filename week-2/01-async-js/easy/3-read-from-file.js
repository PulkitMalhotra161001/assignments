const fs = require("fs");

fs.readFile("practice/Week1/sample.txt", "utf-8", (err, data) => {
  console.log(data);
});

let ans = 0;
for (let i = 0; i < 1000000000; i++) {
  ans += i;
}
ans = 0;
for (let i = 0; i < 1000000000; i++) {
  ans += i;
}
console.log(ans);
