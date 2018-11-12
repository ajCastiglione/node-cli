const program = require("commander");
const { createFiles, installModules } = require("./actions");

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
    console.info("Successfully created express files");
    console.info("Downloading dependencies...");
    installModules();
  });

program.parse(process.argv);
