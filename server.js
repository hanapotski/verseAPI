const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Verses = require("./models/verse");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const router = express.Router();
const verseRoute = () => {
  router.route("/verses")
  .get((req, res) => {
    Verses.find((error, verse) => 
      error ? console.log(error) : res.json(verse)
    )
  })
}
app.use("/verses", verseRoute);


app.listen(8080, function(){
  console.log("Listening to port 8080");
});