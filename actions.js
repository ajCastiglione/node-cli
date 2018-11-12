const fs = require("fs");
const { expressApp } = require("./express-code");

const createFiles = () => {
  try {
    fs.mkdirSync("temp");
  } catch (e) {
    return console.log("Cannot created directory, it already exists.");
  }
  try {
    fs.writeFileSync("temp/server.js", expressApp);
  } catch (e) {
    return console.log(`Cannot create file: ${e}`);
  }
};

const npm = require("npm");

const testFunc = () => {
  npm.load(function(err) {
    // handle errors
    if (err) return console.log(err);
    // install module ffi
    npm.commands.install(["express"], function(er, data) {
      // log errors or data
      if (er) return console.log("Error " + er);
      console.info("Successfully installed Express");
    });

    npm.on("log", function(message) {
      // log installation progress
      console.log(message);
    });
  });
};

module.exports = {
  createFiles,
  testFunc
};
