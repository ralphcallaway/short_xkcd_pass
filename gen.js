const fs = require("fs");
const words = fs.readFileSync("./four_or_more.txt").toString().split("\n");
const pass = [];
for (let i = 0; i < 4; i++) {
  const n = Math.floor(Math.random() * words.length);
  pass.push(words[n]);
}
console.log(pass.join(" "));
