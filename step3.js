const { webCat } = require("./step2");
const fs = require("fs");
const { argv } = require("process");

function writeOrCat(arg) {
  if (argv[2] === "--out") {
    let path = argv[3];
    let readFile = argv[4];
    fs.writeFile(path);
  }
}
