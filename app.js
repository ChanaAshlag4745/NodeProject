const express = require('express');
const app = express();
const routes = require('./routes'); 
var bodyParser = require("body-parser")
app.use(bodyParser())

app.use(express.json())
app.use('/user', routes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



