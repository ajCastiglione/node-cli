#!/usr/bin/env node

const program = require("commander");
const fs = require("fs");
const { createFiles, installModules } = require("./actions");
const { testFunc } = require("./test");

program
  .version("1.0.1")
  .description("CLI to generate basic node / express app");

program
  .command("exp")
  .arguments("<project-directory>")
  .alias("e")
  .description("Generate node / express application with JWT")
  .action(dir => {
    let files = fs.readdirSync(dir);
    if (files.length > 0) {
      console.log(
        "The chosen directory must be empty. To proceed, please choose another directory or remove the existing files."
      );
      process.exit(1);
    }
    console.info("Generating express app...");
    createFiles(dir);
    console.info("Successfully created express files");
    console.info("Downloading dependencies...");
    installModules(dir);
  });

program.parse(process.argv);
