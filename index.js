var express = require("express");
var app = express();

app.get('/', (req, res) => {
    res.send('Simple rest api');
});

app.listen(5000, () => {
 console.log("Server running on port 5000");
});