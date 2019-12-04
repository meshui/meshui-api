const fs = require("fs-extra");

fs.createReadStream("./src/utils/env/.sample-env")
  .pipe(fs.createWriteStream(".env"));
