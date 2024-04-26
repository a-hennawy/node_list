const { cat } = require("./step1");
const axios = require("axios");
const isurl = require("is-url");
const { argv } = require("process");

async function webCat(arg) {
  if (isurl(arg) === true) {
    await axios
      .get(arg)
      .then((resp) => {
        console.log(resp.data.slice(0));
      })
      .catch((err) => {
        console.log(`Oops, there was a problem: ${err}`);
        process.exit(2);
      });
  } else if (arg.slice(-4) === ".txt") {
    cat(arg);
  }
}
webCat(argv[2]);
// let urltest = isurl("http://google.com");
// console.log(urltest);
// webCat("http://google.com");
module.exports = {
  webCat: webCat,
};
