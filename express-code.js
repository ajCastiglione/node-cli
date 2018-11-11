const expressApp = `const express = require("express"); 
const app = express(); 
const port = process.env.PORT || 5000; \n
app.listen(port, () => console.log('Server is running on port ' + port));
`;

module.exports = {
  expressApp
};