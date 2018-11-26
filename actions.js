const npm = require("npm");
const fs = require("fs");
const { expressApp } = require("./appCode/express-code");
const { auth } = require("./appCode/middleware-code");
const { initCode } = require("./appCode/packageJson-code");

const createFiles = dir => {
  try {
    fs.mkdirSync(dir + "/server");
    fs.mkdirSync(dir + "/server/middleware");
    fs.mkdirSync(dir + "/server/config");
  } catch (e) {
    return console.log(`Cannot created directory, ${e}.`);
  }
  try {
    fs.writeFileSync(dir + "/package.json", initCode);
    fs.writeFileSync(dir + "/server/server.js", expressApp);
    fs.writeFileSync(dir + "/server/middleware/authenticate.js", auth);
    fs.writeFileSync(dir + "/server/config/config.js", "");
  } catch (e) {
    return console.log(`Cannot create file: ${e}`);
  }
};

const installModules = dir => {
  try {
    process.chdir(dir);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
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
