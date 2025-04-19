const mongoose = require("mongoose");

const landSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cast: { type: String, required: true },
  adhaar: { type: Number, required: true, unique: true },
  eightA: { type: Number, required: true },
  village: { type: String, required: true },
  phone: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("LandRecord", landSchema);