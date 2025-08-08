import Rating from "../models/Rating.js";

// GET all ratings
const getAllRatings = async (req, res) => {
  try {
    const ratings = await Rating.find({});
    res.status(200).json(ratings);
  } catch (error) {
    console.error("Error fetching ratings:", error);
    res.status(500).json({ message: "Failed to fetch ratings." });
  }
};

export { getAllRatings };