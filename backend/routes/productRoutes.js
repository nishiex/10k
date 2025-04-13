const express = require("express");
const multer = require("multer");
const Product = require("../model/Product");

const router = express.Router();

// Configure multer to use memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Create a new product with an image
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { name, price, description } = req.body;

    const product = new Product({
      name,
      price,
      description,
      image: req.file.buffer, // Store the image as binary data
      imageType: req.file.mimetype, // Store the image MIME type
    });

    await product.save();
    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create product" });
  }
});

// Get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(
      products.map((product) => ({
        _id: product._id,
        name: product.name,
        price: product.price,
        description: product.description,
        image: product.image
          ? `data:${product.imageType};base64,${product.image.toString("base64")}`
          : null, // Convert binary data to Base64 for frontend
      }))
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

// Delete a product
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete product" });
  }
});

module.exports = router;