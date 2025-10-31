const mongoose = require("mongoose");

const merchantSchema = new mongoose.Schema({
  name: String,
  api_key: { type: String, unique: true }
});

module.exports = mongoose.model("Merchant", merchantSchema);
