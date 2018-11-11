const program = require("commander");
const fs = require("fs");
const code = require("./express-code");

program
  .version("1.0.0")
  .description("CLI to generate basic node / express app");

program
  .command("express")
  .alias("e")
  .description("Generate node / express application")
  .action(() => {
    console.info("Generating express app...");
    let exp = code.expressApp;
    try {
      fs.mkdirSync("temp");
    } catch (e) {
      return console.log("Cannot created directory, it already exists.");
    }
    try {
      fs.writeFileSync("temp/server.js", exp);
    } catch (e) {
      return console.log(`Cannot create file: ${e}`);
    }
    console.info("Successfully created express app");
  });

program.parse(process.argv);
