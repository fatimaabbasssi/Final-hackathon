import express from "express";
import Rating from "../models/Rating.js";
import { getAllRatings } from "../controllers/ratingController.js";

const router = express.Router();

// POST /ratings
// POST /ratings
router.post("/userrating", async (req, res) => {
  try {
    const { productId, title, image, rating, comment } = req.body;

    if (!productId || !title || !image || !rating ) {
      return res.status(400).json({ message: "All required fields must be provided." });
    }

    const newRating = new Rating({
      productId,
      title,
      image,
      rating,
      comment, 
    });

    await newRating.save();

    res.status(201).json({ message: "Rating and comment saved successfully." });
  } catch (error) {
    console.error("Error saving rating:", error);
    res.status(500).json({ message: "Server error." });
  }
});



// GET all ratings
router.get("/all", getAllRatings);


export default router;
