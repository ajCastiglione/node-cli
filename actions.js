const npm = require("npm");
const fs = require("fs");
const { expressApp } = require("./appCode/express-code");
const { auth } = require("./appCode/middleware-code");

const createFiles = () => {
  try {
    fs.mkdirSync("server");
    fs.mkdirSync("server/middleware");
    fs.mkdirSync("server/config");
  } catch (e) {
    return console.log(`Cannot created directory, ${e}.`);
  }
  try {
    fs.writeFileSync("server/server.js", expressApp);
    fs.writeFileSync("server/middleware/authenticate.js", auth);
    fs.writeFileSync("server/config/config.js", "");
  } catch (e) {
    return console.log(`Cannot create file: ${e}`);
  }
};

const installModules = () => {
  npm.load(function(err) {
    // handle errors
    if (err) return console.log(err);
    // install module ffi
    npm.commands.install(["express", "jsonwebtoken", "body-parser"], function(
      er,
      data
    ) {
      // log errors or data
      if (er) return console.log("Error " + er);
      console.info("Successfully installed dependencies");
    });

    npm.on("log", function(message) {
      // log installation progress
      console.log(message);
    });
  });
};

module.exports = {
  createFiles,
  installModules
};
