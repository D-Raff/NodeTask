let http = require("http");
let fs = require("fs");

fs.writeFile("data.txt", "Hello World", function (err) {
  if (err) throw err;
  console.log("saved");
});

fs.writeFile("data.txt", "Second Content!", function (err) {
  if (err) throw err;
  console.log("saved");
});

// the second content overwrited the first

fs.appendFile("data.txt", "This data was appended.", function (err) {
  if (err) throw err;
  console.log("Updated!");
});
