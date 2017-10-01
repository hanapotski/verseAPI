const Verse = require("./models/verse").model;

module.exports.getVerses = (req, res) =>
    Verse.find((err, verse) =>
      err ? console.error(err) : res.json(verse))
  