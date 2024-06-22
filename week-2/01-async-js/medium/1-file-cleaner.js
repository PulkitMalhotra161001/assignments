const fs = require("fs");
fs.readFile("practice/Week1/sample.txt", "utf-8", (err, data) => {
  console.log("Before: " + data);

  let newData = "";
  for (let i = 0; i < data.length; i++) {
    if (data.charAt(i) == " ") {
      if (newData.charAt(newData.length - 1) != " ") newData += data.charAt(i);
    } else {
      newData += data.charAt(i);
    }
  }
  fs.writeFile("practice/Week1/sample.txt", newData, (err, data) => {
    if (err) throw err;
    console.log("Saved!!");
  });

  fs.readFile("practice/Week1/sample.txt", "utf-8", (err, data) => {
    console.log("After: " + data);
  });
});
