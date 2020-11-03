const wordSrc =
  "https://raw.githubusercontent.com/first20hours/google-10000-english/master/google-10000-english-usa-no-swears-short.txt";
const shortPassPhrase = async () => {
  const https = require("https");
  const words = await new Promise((resolve) =>
    https.get(wordSrc, (res) => res.on("data", (data) => resolve(data)))
  )
    .then((buf) => buf.toString())
    .then((raw) => raw.split("\n"))
    .then((words) => words.filter((w) => w.length == 4));

  const pass = [];
  for (let i = 0; i < 4; i++) {
    const n = Math.floor(Math.random() * words.length);
    pass.push(words[n]);
  }
  console.log(pass.join(" "));
};

(async () => {
  await shortPassPhrase();
})();
