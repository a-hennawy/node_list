const fs = require("fs");
const { argv } = require("process");

function cat(path) {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      console.log(`Error accessing file ${argv[2]}`);
      console.log("ERROR:", err);
      process.exit(1);
    }
    console.log(`${argv[2]} contents: ${data}`);
  });
  console.log(`Reading ${argv[2]}...`);
}

cat(argv[2]);
