const express = require("express");
const app = express();
console.log(app)
// respond with "Kill Coronovairus!" when a GET request is made to the homepage
app.get("/", function(req, res) {
    res.send("Kill Coronovairus!");
});
const port = 3000;
app.listen(port, function() {
    console.log(`Hello world app listening on port ${port}!`);
});
