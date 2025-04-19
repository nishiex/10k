const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: Buffer }, // Store the image as binary data
  imageType: { type: String },
  subsisdoryAmount: Number,
  afterSubsisdoryCost: Number,
   // Store the image MIME type (e.g., 'image/jpeg')
});

module.exports = mongoose.model("Product", productSchema);