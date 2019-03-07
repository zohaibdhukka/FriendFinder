var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var app = express();

var PORT = process.env.PORT || 3000;

require(path.join(__dirname, "./app/routing/apiRoutes"))(app);
require(path.join(__dirname, "./app/routing/htmlRoutes"))(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.listen(PORT, function() {
  console.log("PORT: " + PORT);
});