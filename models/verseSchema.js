const mongoose = require("mongoose");

const verseSchema = {
  text: { type: String },
  findIn: { type: String }
}

const schema = new mongoose.Schema(verseSchema);

schema.set("toObject", {virtuals: true});
schema.set("toJSON", {virtuals: true});

module.exports = schema;
module.exports.verseSchema = verseSchema;