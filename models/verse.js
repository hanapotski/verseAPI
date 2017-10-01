const mongoose = require("mongoose");
const schema = require("./verseSchema").verseSchema;
const uri = "mongodb://localhost:27017/randomverse";

mongoose.connect(uri, {useMongoClient: true});

mongoose.connection
  .once("open", () => console.info("+++Connected to mongodb"))
  .on("error", () => console.error("---FAILED connection"));
  
  module.exports.model = mongoose.model("Verse", schema, "verses");