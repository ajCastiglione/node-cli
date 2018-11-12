const program = require("commander");
const { createFiles } = require("./actions");
const { testFunc } = require("./test");

program
  .version("1.0.0")
  .description("CLI to generate basic node / express app");

program
  .command("express")
  .alias("e")
  .description("Generate node / express application")
  .action(() => {
    console.info("Generating express app...");
    createFiles();
    console.info("Successfully created express app");
  });

program
  .command("test")
  .alias("t")
  .description("Testing npm usage inside node program")
  .action(() => {
    testFunc();
  });

program.parse(process.argv);
