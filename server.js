const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require("./routes");
const logger = require("morgan");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"))
app.use("/verses", routes.getVerses)

app.listen(8080, () =>
  console.log("Listening to port 8080")
);