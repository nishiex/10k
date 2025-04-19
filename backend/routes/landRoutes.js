const express = require("express");
const router = express.Router();
const LandRecord = require("../model/landRecord");

// POST route for creating a new land record
router.post("/", async (req, res) => {
  try {
    const newEntry = new LandRecord({
      name: req.body.name,
      cast: req.body.cast,
      adhaar: req.body.adhaar,
      eightA: req.body.eightA,
      village: req.body.village,
      phone: req.body.phone,
      date: req.body.date,
    });

    const saved = await newEntry.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error("Error saving land record:", err);
    res.status(500).json({ message: "Error saving land record", error: err.message });
  }
});

// GET route to fetch all land records
router.get("/", async (req, res) => {
  try {
    const records = await LandRecord.find().sort({ _id: -1 });
    res.status(200).json(records);
  } catch (err) {
    console.error("Error fetching land records:", err);
    res.status(500).json({ message: "Failed to fetch records", error: err.message });
  }
});

module.exports = router;