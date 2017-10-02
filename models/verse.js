const mongoose = require("mongoose");
const schema = require("./verseSchema");
const uri = dbName => `mongodb://localhost:27017/${dbName}`;

mongoose.connect(uri('randomverse'), {useMongoClient: true});

mongoose.connection
  .once("open", () => console.info("+++Connected to mongodb"))
  .on("error", () => console.error("---FAILED connection"));
  
module.exports.model = mongoose.model("Verse", schema, "verses");