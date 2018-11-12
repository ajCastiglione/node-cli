const expressApp = ` // NPM Modules
const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

// Local Modules
const { authenticate } = require("./middleware/authenticate");

const app = express(); 
const port = process.env.PORT || 5000; 

app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  
  // Modify accepted headers to your needs
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, x-auth, Content-Type, Post-Type"
  );
  next();
});

// Simple response for anyone directly accessing the API
app.get('/', (req, res) => {
  res.send({
    default: 'This is your home page'
  });
}); \n

app.listen(port, () => console.log('Server is running on port ' + port));
`;

module.exports = {
  expressApp
};
