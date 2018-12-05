const initCode = `{
  "name": "express-app",
  "version": "1.0.0",
  "description": "Stater kit for Express Apps",
  "main": "server/server.js",
  "scripts": {
    "start": "node server/server.js",
    "dev": "export NODE_ENV=dev || SET \\"NODE_ENV=dev\\" && nodemon server/server.js || node server/server.js"
  },
  "keywords": [],
  "author": "AJ Castiglione",
  "license": "MIT",
  "dependencies": {}
}
`;

module.exports = { initCode };
