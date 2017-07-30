var express = require('express');
var app = express();

//serve the files on local server
// Make sure directory name '/' points to the place based on where the server.js folder is located
app.use(express.static(__dirname + '/'));

// 3000 is a common port to use. 8000 is common port to use too
// Listen for incoming requests on process.env.Port or 3000
app.listen(process.env.PORT || 3000);