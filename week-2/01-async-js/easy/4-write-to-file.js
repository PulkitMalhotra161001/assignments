const fs = require("fs");
fs.readFile("practice/Week1/sample.txt", "utf-8", (err, data) => {
  console.log("Before: " + data);
});
fs.writeFile("practice/Week1/sample.txt", "New Data", (err, data) => {
  if (err) throw err;
  console.log("Saved!!");
});
fs.readFile("practice/Week1/sample.txt", "utf-8", (err, data) => {
  console.log("After: " + data);
});
