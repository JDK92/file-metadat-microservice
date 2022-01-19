//  IMPORTS
require('dotenv').config()

const express = require('express');
const cors = require('cors');

const routes = require("./routes/routes");

const port = process.env.PORT || 3000;

//  INSTANCE
const app = express();

//  MIDDLEWARES
app.use(cors());
app.use(routes);
app.use('/public', express.static(process.cwd() + '/public'));

//  START SERVER
app.listen(port, function() {
  console.log('Your app is listening on port ' + port)
});
